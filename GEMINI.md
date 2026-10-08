# Project Rules & Assistant Guidelines — NIOS Career Point

## 1. Learning Journal Maintenance (Mandatory)
- Maintain and update [LEARNING_JOURNAL.md](file:///e:/SensorSpine/NIOS%20Career%20Point/LEARNING_JOURNAL.md) actively throughout the lifecycle of this project.
- **When to add an entry**:
  - Whenever an architectural decision or paradigm shift is made.
  - Whenever a subtle bug, gotcha, or cross-browser rendering issue is resolved.
  - Whenever responsive layout formulas, animation curves, or performance optimizations are calibrated.
  - When the user provides critical feedback or project requirements.
- Follow the entry schema defined in [LEARNING_JOURNAL.md](file:///e:/SensorSpine/NIOS%20Career%20Point/LEARNING_JOURNAL.md) (Context, Problem, Solution, Key Takeaway/Rule).

## 2. Technology Stack & Constraints
- **Core Frontend**: Strict HTML5, CSS3, SVG, and Vanilla JavaScript.
- **Animation & Motion**: Client-approved lightweight motion engine via CDN: GSAP 3.12, ScrollTrigger, and Lenis smooth scrolling.
- **Strictly Prohibited**: Do NOT introduce heavy frontend application frameworks or CSS utility suites (e.g., React, Vue, jQuery, Bootstrap, Tailwind).
- **Backend**: Native PHP for Hostinger deployment.
- **Parity Rule**: Keep `index.php` and standalone static `index.html` synchronized when updating structure or markup.

## 3. Motion & Visual Design Standards
- Never attempt to fake complex animations by scaling or cropping raster PNG images. Reconstruct vector elements in SVG for element-by-element cinematic motion.
- Use `transform-box: fill-box;` and normalized `transform-origin` on SVG sub-elements.
- Ensure fluid responsive scaling using `clamp()` across all canonical breakpoints:
  - Desktop 1080p (`1920x1080`)
  - Laptops (`1440x900`, `1366x768`, `1280x720`)
  - Tablets (`768x1024`)
  - Mobile (`430x932`, `390x844`)
- Maintain visual hierarchy: Logo as primary hero, subtle ambient glow, subordinate clear tagline.
