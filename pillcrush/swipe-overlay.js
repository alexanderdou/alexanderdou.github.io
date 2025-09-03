/**
 * Swipe Detection Overlay for PillCrush Game
 * Adds drag-to-swap functionality to replace the current two-click mechanism
 */

class SwipeDetector {
    constructor() {
        this.isDragging = false;
        this.startElement = null;
        this.startPosition = { x: 0, y: 0 };
        this.currentPosition = { x: 0, y: 0 };
        this.threshold = 20; // Minimum distance to register as a swipe (lowered for mobile)
        this.gameContainer = null;
        this.dragPreview = null;
        
        this.init();
    }
    
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupEventListeners());
        } else {
            this.setupEventListeners();
        }
    }
    
    setupEventListeners() {
        // Find the game container (likely the canvas or main game div)
        this.gameContainer = document.getElementById('root') || document.body;
        
        // Add mouse event listeners
        this.gameContainer.addEventListener('mousedown', this.onPointerDown.bind(this));
        document.addEventListener('mousemove', this.onPointerMove.bind(this));
        document.addEventListener('mouseup', this.onPointerUp.bind(this));
        
        // Add touch event listeners for mobile
        this.gameContainer.addEventListener('touchstart', this.onPointerDown.bind(this), { passive: false });
        document.addEventListener('touchmove', this.onPointerMove.bind(this), { passive: false });
        document.addEventListener('touchend', this.onPointerUp.bind(this));
        document.addEventListener('touchcancel', this.onPointerUp.bind(this));
        
        console.log('Swipe detector initialized');
    }
    
    getPointerPosition(event) {
        if (event.touches && event.touches.length > 0) {
            return { x: event.touches[0].clientX, y: event.touches[0].clientY };
        }
        return { x: event.clientX, y: event.clientY };
    }
    
    onPointerDown(event) {
        // For touch events, only handle single touch
        if (event.touches && event.touches.length > 1) {
            return;
        }
        
        const pos = this.getPointerPosition(event);
        const element = this.getGameElementAt(pos.x, pos.y);
        
        if (!element || !this.isGamePiece(element)) {
            return;
        }
        
        this.isDragging = true;
        this.startElement = element;
        this.startPosition = pos;
        this.currentPosition = pos;
        
        // Prevent default to avoid triggering existing click handlers immediately
        event.preventDefault();
        event.stopPropagation();
        
        // Add visual feedback
        this.createDragPreview(element, pos);
        
        console.log('Started dragging from element:', element, 'at position:', pos);
    }
    
    onPointerMove(event) {
        if (!this.isDragging) return;
        
        // For touch events, only handle single touch
        if (event.touches && event.touches.length > 1) {
            return;
        }
        
        const pos = this.getPointerPosition(event);
        this.currentPosition = pos;
        
        // Update drag preview position
        if (this.dragPreview) {
            this.dragPreview.style.left = (pos.x - 25) + 'px';
            this.dragPreview.style.top = (pos.y - 25) + 'px';
        }
        
        // Highlight potential drop targets
        const dropTarget = this.getGameElementAt(pos.x, pos.y);
        this.highlightDropTarget(dropTarget);
        
        // Prevent default behavior (like scrolling on mobile)
        event.preventDefault();
        event.stopPropagation();
    }
    
    onPointerUp(event) {
        if (!this.isDragging) return;
        
        // Get the final position - for touch events, use changedTouches
        const pos = event.changedTouches && event.changedTouches.length > 0 
            ? { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY }
            : this.currentPosition;
        
        const distance = Math.sqrt(
            Math.pow(pos.x - this.startPosition.x, 2) + 
            Math.pow(pos.y - this.startPosition.y, 2)
        );
        
        console.log('Drag ended:', { 
            startPos: this.startPosition, 
            endPos: pos, 
            distance: distance, 
            threshold: this.threshold 
        });
        
        // Clean up drag preview
        this.cleanupDragPreview();
        this.clearDropTargetHighlights();
        
        if (distance >= this.threshold) {
            // This is a drag operation - find target element
            const targetElement = this.getGameElementAt(pos.x, pos.y);
            
            console.log('Drag target element:', targetElement);
            
            if (targetElement && this.isGamePiece(targetElement) && targetElement !== this.startElement) {
                // Perform the swap
                console.log('Performing swap!');
                this.performSwap(this.startElement, targetElement);
            } else {
                console.log('Invalid target for swap');
            }
        } else {
            // This is a tap/click - maintain original behavior if needed
            console.log('Too short for drag, treating as click');
            this.simulateClick(this.startElement);
        }
        
        // Reset state
        this.isDragging = false;
        this.startElement = null;
        
        console.log('Drag operation completed');
    }
    
    getGameElementAt(x, y) {
        // Hide drag preview temporarily to get element underneath
        const originalDisplay = this.dragPreview ? this.dragPreview.style.display : null;
        if (this.dragPreview) this.dragPreview.style.display = 'none';
        
        const element = document.elementFromPoint(x, y);
        
        // Restore drag preview
        if (this.dragPreview && originalDisplay !== null) {
            this.dragPreview.style.display = originalDisplay;
        }
        
        return element;
    }
    
    isGamePiece(element) {
        // Look for common patterns that indicate a game piece
        // This might need adjustment based on the actual game structure
        
        // Check if element or its parents have game-piece-like properties
        let current = element;
        for (let i = 0; i < 5 && current; i++) {
            // Look for canvas elements or divs that might contain game pieces
            if (current.tagName === 'CANVAS') return true;
            
            // Look for common game piece classes/attributes
            const className = current.className || '';
            const id = current.id || '';
            
            if (className.includes('pill') || 
                className.includes('piece') || 
                className.includes('tile') ||
                className.includes('gem') ||
                id.includes('pill') ||
                id.includes('piece')) {
                return true;
            }
            
            // Check for inline styles that might indicate interactive elements
            const style = getComputedStyle(current);
            if (style.cursor === 'pointer' || style.cursor === 'grab') {
                return true;
            }
            
            current = current.parentElement;
        }
        
        // For canvas-based games, treat the canvas as having game pieces
        if (element.tagName === 'CANVAS') {
            return true;
        }
        
        return false;
    }
    
    // For canvas-based games, we need to detect grid positions
    getCanvasGridPosition(canvas, x, y) {
        const rect = canvas.getBoundingClientRect();
        const canvasX = x - rect.left;
        const canvasY = y - rect.top;
        
        // Assume a typical match-3 grid (adjust based on actual game)
        const gridSize = 8; // Common grid size for match-3 games
        const cellWidth = rect.width / gridSize;
        const cellHeight = rect.height / gridSize;
        
        const gridX = Math.floor(canvasX / cellWidth);
        const gridY = Math.floor(canvasY / cellHeight);
        
        return {
            gridX: Math.max(0, Math.min(gridSize - 1, gridX)),
            gridY: Math.max(0, Math.min(gridSize - 1, gridY)),
            pixelX: canvasX,
            pixelY: canvasY
        };
    }
    
    createDragPreview(element, position) {
        this.dragPreview = document.createElement('div');
        this.dragPreview.style.cssText = `
            position: fixed;
            left: ${position.x - 25}px;
            top: ${position.y - 25}px;
            width: 50px;
            height: 50px;
            background: rgba(255, 255, 255, 0.8);
            border: 2px solid #0066cc;
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            transition: none;
        `;
        
        document.body.appendChild(this.dragPreview);
    }
    
    cleanupDragPreview() {
        if (this.dragPreview) {
            document.body.removeChild(this.dragPreview);
            this.dragPreview = null;
        }
    }
    
    highlightDropTarget(element) {
        // Remove previous highlights
        this.clearDropTargetHighlights();
        
        if (element && this.isGamePiece(element) && element !== this.startElement) {
            element.style.outline = '3px solid #00cc66';
            element.style.outlineOffset = '2px';
            element.setAttribute('data-drop-highlight', 'true');
        }
    }
    
    clearDropTargetHighlights() {
        const highlighted = document.querySelectorAll('[data-drop-highlight="true"]');
        highlighted.forEach(el => {
            el.style.outline = '';
            el.style.outlineOffset = '';
            el.removeAttribute('data-drop-highlight');
        });
    }
    
    performSwap(startElement, targetElement) {
        console.log('Performing swap between:', startElement, 'and', targetElement);
        
        // For canvas-based games, we need to handle grid coordinates
        if (startElement.tagName === 'CANVAS' && targetElement.tagName === 'CANVAS') {
            const startPos = this.getCanvasGridPosition(startElement, this.startPosition.x, this.startPosition.y);
            const endPos = this.getCanvasGridPosition(targetElement, this.currentPosition.x, this.currentPosition.y);
            
            console.log('Canvas swap from grid:', startPos, 'to grid:', endPos);
            
            // Dispatch canvas-specific event
            const canvasSwapEvent = new CustomEvent('canvasPillSwap', {
                detail: {
                    canvas: startElement,
                    fromGrid: startPos,
                    toGrid: endPos,
                    fromPixel: this.startPosition,
                    toPixel: this.currentPosition
                }
            });
            
            document.dispatchEvent(canvasSwapEvent);
            startElement.dispatchEvent(canvasSwapEvent);
        }
        
        // Method 1: Try to trigger existing game logic by simulating clicks
        this.simulateSwapClicks(startElement, targetElement);
        
        // Method 2: Try to dispatch custom events
        const swapEvent = new CustomEvent('pillSwap', {
            detail: {
                from: startElement,
                to: targetElement,
                fromPosition: this.getElementPosition(startElement),
                toPosition: this.getElementPosition(targetElement)
            }
        });
        
        document.dispatchEvent(swapEvent);
    }
    
    simulateSwapClicks(startElement, targetElement) {
        // Simulate the existing two-click mechanism
        setTimeout(() => {
            this.simulateClick(startElement);
            
            setTimeout(() => {
                this.simulateClick(targetElement);
            }, 50);
        }, 10);
    }
    
    simulateClick(element) {
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Create and dispatch mouse events
        const events = ['mousedown', 'mouseup', 'click'];
        
        events.forEach(eventType => {
            const event = new MouseEvent(eventType, {
                bubbles: true,
                cancelable: true,
                clientX: centerX,
                clientY: centerY,
                button: 0
            });
            
            element.dispatchEvent(event);
        });
    }
    
    getElementPosition(element) {
        const rect = element.getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
    }
}

// Initialize the swipe detector
const swipeDetector = new SwipeDetector();

// Expose for debugging
window.swipeDetector = swipeDetector;