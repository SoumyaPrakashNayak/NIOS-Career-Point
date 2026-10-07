/**
 * NIOS CAREER POINT BERHAMPUR
 * Premium Splash Screen Motion Controller
 * 
 * Strict Vanilla JavaScript Implementation
 * Orchestrates stage coordinates, timing, session storage, and clean DOM handoff.
 */

(function () {
    'use strict';

    /**
     * Development Configuration Flag:
     * When true  : Intro plays on every refresh (convenient for testing & review).
     * When false : Intro plays only on the first visit within a browser session (sessionStorage).
     */
    const SHOW_INTRO_EVERY_TIME = true;

    // Session storage key
    const STORAGE_KEY = 'nios_intro_shown';

    // Animation duration in milliseconds (matches --intro-duration: 5.4s from reference video)
    const INTRO_DURATION_MS = 5400;

    // DOM Elements
    let introScreen;
    let introLogoStage;
    let headerBrandLogo;
    let skipBtn;
    let completionTimeout = null;

    /**
     * Initializes the Splash Screen controller once the DOM is ready.
     */
    function initIntro() {
        introScreen = document.getElementById('intro-screen');
        introLogoStage = document.getElementById('brand-construction') || 
                         document.getElementById('intro-brand-svg') || 
                         document.getElementById('intro-logo-stage');
        headerBrandLogo = document.getElementById('header-brand-logo');
        skipBtn = document.getElementById('intro-skip-btn');

        if (!introScreen) return;

        // Check sessionStorage if single-visit mode is active
        if (!SHOW_INTRO_EVERY_TIME && sessionStorage.getItem(STORAGE_KEY) === 'true') {
            skipImmediately();
            return;
        }

        // Lock background scroll during the intro
        document.body.classList.add('intro-active');

        // Scroll to top to ensure header coordinates align with the viewport
        window.scrollTo(0, 0);

        // Calculate handoff coordinates for the navbar transition
        calculateHandoffCoordinates();

        // Recalculate on window resize and image load
        window.addEventListener('resize', calculateHandoffCoordinates, { passive: true });
        if (headerBrandLogo && !headerBrandLogo.complete) {
            headerBrandLogo.addEventListener('load', calculateHandoffCoordinates, { once: true });
        }

        // Setup Skip Button
        if (skipBtn) {
            skipBtn.addEventListener('click', handleSkipClick);
        }

        // Allow ESC key to skip intro
        window.addEventListener('keydown', handleKeyDown);

        // Schedule intro completion at the end of the sequence
        scheduleCompletion();

        // Listen for native animationend on intro-screen as a synchronized trigger
        introScreen.addEventListener('animationend', handleAnimationEnd);
    }

    /**
     * Measures the exact position of the homepage navbar logo relative to
     * the center splash logo stage, updating CSS variables for a pixel-perfect handoff.
     */
    function calculateHandoffCoordinates() {
        if (!introLogoStage || !headerBrandLogo) return;

        const splashRect = introLogoStage.getBoundingClientRect();
        const headerRect = headerBrandLogo.getBoundingClientRect();

        // Ensure elements have rendered geometry
        if (splashRect.width === 0 || headerRect.width === 0) {
            requestAnimationFrame(calculateHandoffCoordinates);
            return;
        }

        const splashCenterX = splashRect.left + splashRect.width / 2;
        const splashCenterY = splashRect.top + splashRect.height / 2;

        const headerCenterX = headerRect.left + headerRect.width / 2;
        const headerCenterY = headerRect.top + headerRect.height / 2;

        const deltaX = headerCenterX - splashCenterX;
        const deltaY = headerCenterY - splashCenterY;
        const scale = headerRect.width / splashRect.width;

        document.documentElement.style.setProperty('--target-x', `${deltaX.toFixed(2)}px`);
        document.documentElement.style.setProperty('--target-y', `${deltaY.toFixed(2)}px`);
        document.documentElement.style.setProperty('--target-scale', `${scale.toFixed(4)}`);
    }

    /**
     * Schedules the automatic completion of the splash screen.
     */
    function scheduleCompletion() {
        if (completionTimeout) clearTimeout(completionTimeout);
        completionTimeout = setTimeout(completeIntro, INTRO_DURATION_MS);
    }

    /**
     * Handles CSS animationend event on the intro overlay.
     */
    function handleAnimationEnd(event) {
        if (event.target === introScreen && event.animationName === 'introOverlaySequence') {
            completeIntro();
        }
    }

    /**
     * Completes the intro, marks session storage, and unlocks page interaction.
     */
    function completeIntro() {
        if (!introScreen) return;
        if (completionTimeout) clearTimeout(completionTimeout);

        // Mark intro-complete class
        introScreen.classList.add('intro-complete');
        document.body.classList.remove('intro-active');

        // Clean up listeners
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('resize', calculateHandoffCoordinates);

        // Record in sessionStorage for first-visit behavior
        try {
            sessionStorage.setItem(STORAGE_KEY, 'true');
        } catch (e) {
            // Storage quota fallback
        }

        // Dispatch a custom event
        window.dispatchEvent(new CustomEvent('nios:introComplete'));
    }

    /**
     * Skips the intro immediately (used for returning sessions or instant skip).
     */
    function skipImmediately() {
        if (!introScreen) return;
        introScreen.classList.add('intro-complete');
        document.body.classList.remove('intro-active');
    }

    /**
     * Skip button click handler
     */
    function handleSkipClick(e) {
        e.preventDefault();
        completeIntro();
    }

    /**
     * Escape key handler to skip intro
     */
    function handleKeyDown(e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
            completeIntro();
        }
    }

    /**
     * Expose a global replay method for development & demonstration testing.
     * Accessible via window.replayIntroAnimation() or UI replay buttons.
     */
    window.replayIntroAnimation = function () {
        if (!introScreen) {
            introScreen = document.getElementById('intro-screen');
        }
        if (!introScreen) return;

        window.scrollTo(0, 0);
        document.body.classList.add('intro-active');
        introScreen.classList.remove('intro-complete');

        // Force DOM reflow to restart CSS keyframe animations
        void introScreen.offsetWidth;

        calculateHandoffCoordinates();
        scheduleCompletion();
    };

    // Initialize when DOM is interactive
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initIntro);
    } else {
        initIntro();
    }
})();
