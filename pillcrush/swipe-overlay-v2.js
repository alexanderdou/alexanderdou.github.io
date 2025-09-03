/**
 * Simplified Native Drag Interface for PillCrush Game
 * Direct integration without event simulation
 */

class SimpleDragInterface {
    constructor() {
        this.isDragging = false;
        this.startElement = null;
        this.startPosition = { x: 0, y: 0 };
        this.threshold = 20;
        this.gameContainer = null;
        this.originalGameFunctions = null;
        
        this.init();
    }
    
    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }
    
    setup() {
        this.gameContainer = document.getElementById('root') || document.body;
        this.interceptGameFunctions();
        this.setupPointerEvents();
        
        console.log('Simple drag interface initialized');
    }
    
    interceptGameFunctions() {
        // Hook into React's event system by monitoring the game container
        this.originalGameFunctions = {
            clicks: new Map() // Store original click handlers
        };
        
        // Monitor for dynamically added elements
        const observer = new MutationObserver(() => {
            this.scanForGameElements();
        });
        
        observer.observe(this.gameContainer, {
            childList: true,
            subtree: true
        });
        
        this.scanForGameElements();
    }
    
    scanForGameElements() {
        // Find elements that look like game pieces
        const gameElements = this.gameContainer.querySelectorAll('*');
        
        gameElements.forEach(element => {
            if (this.looksLikeGamePiece(element) && !element._dragInterceptor) {
                this.attachToPiece(element);
                element._dragInterceptor = true;
            }
        });
    }
    
    looksLikeGamePiece(element) {
        // Simple heuristics to identify game pieces
        const style = getComputedStyle(element);
        const hasImage = element.tagName === 'IMG' || 
                         style.backgroundImage !== 'none' ||
                         element.querySelector('img');
        
        const isClickable = style.cursor === 'pointer' || 
                           element.onclick ||
                           element.addEventListener;
                           
        const hasGameClasses = element.className.toLowerCase().includes('pill') ||
                              element.className.toLowerCase().includes('piece') ||
                              element.className.toLowerCase().includes('tile');
                              
        return hasImage || isClickable || hasGameClasses || element.tagName === 'CANVAS';
    }
    
    attachToPiece(element) {
        // Store original handlers but don't remove them yet
        const originalOnClick = element.onclick;
        
        // Store for later use
        if (originalOnClick && !this.originalGameFunctions.clicks.has(element)) {
            this.originalGameFunctions.clicks.set(element, originalOnClick);
        }
    }
    
    setupPointerEvents() {
        // Use modern Pointer Events for unified touch/mouse handling
        // Set passive: false explicitly to allow preventDefault
        const options = { passive: false, capture: true };
        
        this.gameContainer.addEventListener('pointerdown', this.onPointerDown.bind(this), options);
        this.gameContainer.addEventListener('pointermove', this.onPointerMove.bind(this), options);
        this.gameContainer.addEventListener('pointerup', this.onPointerUp.bind(this), options);
        this.gameContainer.addEventListener('pointercancel', this.onPointerUp.bind(this), options);
        
        // Also prevent default touch behaviors on the container
        this.gameContainer.style.touchAction = 'none';
        this.gameContainer.style.userSelect = 'none';
    }
    
    onPointerDown(event) {
        // Reset any previous drag state
        if (this.isDragging) {
            this.resetDragState();
        }
        
        const element = event.target;
        
        if (!this.looksLikeGamePiece(element)) {
            return;
        }
        
        this.isDragging = true;
        this.startElement = element;
        this.startPosition = { x: event.clientX, y: event.clientY };
        
        // Prevent default behaviors
        try {
            event.preventDefault();
            event.stopPropagation();
        } catch (e) {
            console.log('preventDefault failed:', e);
        }
        
        // Visual feedback
        element.style.transform = 'scale(1.1)';
        element.style.zIndex = '1000';
        
        console.log('Started drag on:', element);
    }
    
    onPointerMove(event) {
        if (!this.isDragging) return;
        
        try {
            event.preventDefault();
            event.stopPropagation();
        } catch (e) {
            // Ignore preventDefault errors
        }
        
        // Update visual feedback based on distance
        const distance = Math.sqrt(
            Math.pow(event.clientX - this.startPosition.x, 2) + 
            Math.pow(event.clientY - this.startPosition.y, 2)
        );
        
        if (distance > this.threshold) {
            this.startElement.style.opacity = '0.7';
        }
    }
    
    onPointerUp(event) {
        if (!this.isDragging) return;
        
        const distance = Math.sqrt(
            Math.pow(event.clientX - this.startPosition.x, 2) + 
            Math.pow(event.clientY - this.startPosition.y, 2)
        );
        
        if (distance >= this.threshold) {
            // This was a drag - find target
            const targetElement = document.elementFromPoint(event.clientX, event.clientY);
            
            if (targetElement && 
                this.looksLikeGamePiece(targetElement) && 
                targetElement !== this.startElement) {
                
                console.log('Performing swap:', this.startElement, 'to', targetElement);
                this.performDirectSwap(this.startElement, targetElement);
            } else {
                console.log('Invalid drag target');
            }
        } else {
            // This was a click - execute original behavior
            console.log('Short tap, executing original click');
            this.executeOriginalClick(this.startElement);
        }
        
        // Reset state
        this.resetDragState();
    }
    
    resetDragState() {
        if (this.startElement) {
            // Reset visual state
            this.startElement.style.transform = '';
            this.startElement.style.zIndex = '';
            this.startElement.style.opacity = '';
        }
        
        this.isDragging = false;
        this.startElement = null;
    }
    
    performDirectSwap(fromElement, toElement) {
        // Try multiple approaches to trigger the swap
        
        // Approach 1: Call original click handlers in sequence
        this.executeOriginalClick(fromElement);
        setTimeout(() => {
            this.executeOriginalClick(toElement);
        }, 10); // Minimal delay
        
        // Approach 2: Dispatch React-compatible events
        this.dispatchReactEvent(fromElement, 'click');
        setTimeout(() => {
            this.dispatchReactEvent(toElement, 'click');
        }, 15);
        
        // Approach 3: Try to find React fiber and call handlers directly
        this.tryDirectReactCall(fromElement, toElement);
    }
    
    executeOriginalClick(element) {
        const originalHandler = this.originalGameFunctions.clicks.get(element);
        if (originalHandler) {
            originalHandler.call(element, { target: element });
        }
        
        // Also try dispatching a synthetic click
        const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            clientX: element.getBoundingClientRect().left + element.offsetWidth / 2,
            clientY: element.getBoundingClientRect().top + element.offsetHeight / 2
        });
        
        element.dispatchEvent(clickEvent);
    }
    
    dispatchReactEvent(element, eventType) {
        // Create React-compatible synthetic event
        const syntheticEvent = new MouseEvent(eventType, {
            bubbles: true,
            cancelable: true,
            view: window
        });
        
        // Add React-specific properties
        syntheticEvent.isPersistent = () => true;
        syntheticEvent.persist = () => {};
        
        element.dispatchEvent(syntheticEvent);
    }
    
    tryDirectReactCall(fromElement, toElement) {
        // Attempt to find React fiber and call onClick directly
        const fromFiber = this.getReactFiber(fromElement);
        const toFiber = this.getReactFiber(toElement);
        
        if (fromFiber && fromFiber.memoizedProps && fromFiber.memoizedProps.onClick) {
            try {
                fromFiber.memoizedProps.onClick({ target: fromElement });
                
                setTimeout(() => {
                    if (toFiber && toFiber.memoizedProps && toFiber.memoizedProps.onClick) {
                        toFiber.memoizedProps.onClick({ target: toElement });
                    }
                }, 5);
            } catch (error) {
                console.log('Direct React call failed:', error);
            }
        }
    }
    
    getReactFiber(element) {
        // Try to get React fiber from element
        for (const key in element) {
            if (key.startsWith('__reactFiber') || key.startsWith('__reactInternalInstance')) {
                return element[key];
            }
        }
        return null;
    }
}

// Initialize when DOM is ready
const dragInterface = new SimpleDragInterface();

// Expose for debugging
window.dragInterface = dragInterface;