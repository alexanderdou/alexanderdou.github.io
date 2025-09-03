# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
PillCrush is a match-3 puzzle game built with React and bundled as a static HTML game with drag-to-swap functionality for desktop and mobile.

## Collaboration Style & Workflow

### CRITICAL: Don't Code Immediately
**Before implementing any changes, act like a senior/staff engineer:**
- Ask clarifying questions about the requirements
- Propose approach in pseudo-code format: "First, I'm going to do X, Y, and Z" (focus on OUTCOMES, not implementation details)
- Wait for alignment before proceeding
- Only start coding after explicit approval: "ok, let's go implement that"

### Complexity Sanity-Checking
**When your solution becomes complex, STOP and ask:**
- "This approach is getting complex. Let me confirm this is what you actually want."
- "I'm about to create [describe abstraction/layer]. Is this the right approach or should we do something simpler?"
- Example: Don't create overlay interpreters when direct code changes would work

### Communication Style
- Use **pseudo-code** to explain approach, not step-by-step code walkthroughs
- When presenting issues or recommendations:
  1. **Make a recommendation with clear reasoning**
  2. **Then list other options you considered and why you discounted them**

### Test-Driven Development
- **Prompt for TDD when appropriate** - user wants to learn this practice
- Use `test-swipe.html` as a model for creating isolated test cases

## Current Priority Issues

### 1. Drag/Swipe Functionality
- Primary implementation: `swipe-overlay-v2.js`
- Test using: `test-swipe.html`

### 2. Mobile Viewport (iPhone 13 mini)
- **Problem**: Bottom row obscured by Chrome nav bar in iOS
- **Solution**: Detect and adapt to safe area insets
- Remove Replit artifacts/branding

## Key Files
- **index.html**: Main entry point
- **assets/index-*.js**: Bundled React game (minified, no source available)
- **swipe-overlay-v2.js**: Active drag implementation
- **test-swipe.html**: Drag testing environment