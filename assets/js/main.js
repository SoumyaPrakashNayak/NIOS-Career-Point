/**
 * NIOS CAREER POINT BERHAMPUR - MASTER INTERACTION CONTROLLER
 * Vanilla JavaScript + GSAP + Lenis Engine
 * 
 * Orchestrates:
 * 1. Lenis Smooth Scrolling
 * 2. Intro Handoff & Hero Entrance Animation (GSAP)
 * 3. Floating Contained Navigation & Mobile Drawer
 * 4. FAQ Accordion & Form Submissions
 */

(function () {
    'use strict';

    // 1. Lenis Smooth Scroll Engine (High-Performance & Lag-Free)
    function initSmoothScroll() {
        if (typeof window.Lenis === 'undefined') return;

        // Skip smooth scroll on touch devices or if reduced motion is requested
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        try {
            const lenis = new Lenis({
                duration: 0.8,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                wheelMultiplier: 1.0,
                touchMultiplier: 1.5,
                smoothTouch: false,
                infinite: false
            });

            // Native hardware-synchronized RAF loop
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);

            // Connect with GSAP ScrollTrigger if active
            if (typeof ScrollTrigger !== 'undefined') {
                lenis.on('scroll', ScrollTrigger.update);
            }

            // Coordinate with intro splash screen: pause during intro, then resume & recalculate
            const introScreen = document.getElementById('intro-screen');
            if (introScreen && document.body.classList.contains('intro-active')) {
                lenis.stop();
                window.addEventListener('nios:introComplete', () => {
                    lenis.start();
                    lenis.resize();
                }, { once: true });
            }

            // Smooth in-page anchor navigation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const href = this.getAttribute('href');
                    if (href && href.length > 1 && href.startsWith('#')) {
                        const target = document.querySelector(href);
                        if (target) {
                            e.preventDefault();
                            lenis.scrollTo(target, { offset: -70, duration: 0.85 });
                        }
                    }
                });
            });

            // Expose globally
            window.lenis = lenis;
        } catch (e) {
            console.warn('Lenis initialization skipped:', e);
        }
    }

    // 2. Hero GSAP Cinematic Entrance Sequence
    function initHeroMotion() {
        if (typeof gsap === 'undefined') return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            gsap.set('.site-header, .hero-badge, .hero-title, .hero-lead, .hero-actions .btn, .hero-photo-card, .floating-element, .hero-concentric-rings', {
                opacity: 1,
                clearProps: 'all'
            });
            return;
        }

        let entranceExecuted = false;

        function runHeroEntrance() {
            if (entranceExecuted) return;
            entranceExecuted = true;

            const tl = gsap.timeline({
                defaults: {
                    ease: 'power3.out',
                    duration: 0.85
                }
            });

            // 1. Navigation enters gently
            tl.fromTo('.site-header',
                { y: -16, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7 }
            )
            // 2. Eyebrow badge pill fades upward
            .fromTo('.hero-badge',
                { y: 14, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.55 },
                '-=0.4'
            )
            // 3. Hero headline reveals
            .fromTo('.hero-title',
                { y: 28, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' },
                '-=0.35'
            )
            // 4. Body copy enters
            .fromTo('.hero-lead',
                { y: 16, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.65 },
                '-=0.5'
            )
            // 5. Hero CTA button enters
            .fromTo('.hero-actions .btn',
                { y: 14, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6 },
                '-=0.45'
            )
            // 6. Right collage 2x2 student photo cards pop in with organic bounce
            .fromTo('.hero-photo-card',
                { opacity: 0, scale: 0.82, y: 25 },
                { opacity: 1, scale: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'back.out(1.5)' },
                '-=0.7'
            )
            // 7. Floating 3D cap, orbs, doodle clouds & concentric rings
            .fromTo('.floating-element, .hero-concentric-rings',
                { opacity: 0, scale: 0.6 },
                { opacity: 1, scale: 1, stagger: 0.08, duration: 0.7, ease: 'power2.out' },
                '-=0.5'
            );
        }

        // Determine if intro splash screen is active
        const introScreen = document.getElementById('intro-screen');
        const isIntroActive = introScreen && (document.body.classList.contains('intro-active') || !introScreen.classList.contains('intro-complete'));

        if (isIntroActive) {
            // Keep elements hidden while locked intro plays
            gsap.set('.hero-badge, .hero-title, .hero-lead, .hero-actions .btn, .hero-photo-card, .floating-element, .hero-concentric-rings', {
                opacity: 0
            });

            // Listen for intro completion event dispatched by splash.js
            window.addEventListener('nios:introComplete', runHeroEntrance, { once: true });

            // Safety timeout: run after 6.2s if event doesn't trigger for any reason
            setTimeout(() => {
                if (!entranceExecuted) {
                    runHeroEntrance();
                }
            }, 6200);
        } else {
            // No intro active: run entrance immediately
            runHeroEntrance();
        }
    }

    // 3. Main DOM Ready Controller
    document.addEventListener('DOMContentLoaded', () => {
        initSmoothScroll();
        initHeroMotion();

        // Header scroll elevation
        const header = document.querySelector('.site-header');
        if (header) {
            const updateHeader = (scrollY) => {
                header.classList.toggle('scrolled', scrollY > 24);
            };
            if (window.lenis) {
                window.lenis.on('scroll', (e) => updateHeader(e.scroll));
            } else {
                window.addEventListener('scroll', () => updateHeader(window.scrollY), { passive: true });
            }
            updateHeader(window.scrollY);
        }

        // Mobile navigation drawer toggle
        const mobileToggle = document.getElementById('mobile-toggle');
        const mainNav = document.getElementById('main-nav');

        if (mobileToggle && mainNav) {
            mobileToggle.addEventListener('click', () => {
                const isOpen = mainNav.classList.toggle('active');
                mobileToggle.classList.toggle('active');
                mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
                document.body.style.overflow = isOpen ? 'hidden' : '';
            });

            // Close mobile drawer on link click
            const navLinks = mainNav.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (mainNav.classList.contains('active')) {
                        mainNav.classList.remove('active');
                        mobileToggle.classList.remove('active');
                        mobileToggle.setAttribute('aria-expanded', 'false');
                        document.body.style.overflow = '';
                    }
                });
            });
        }

        // Accessible FAQ Accordion
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const item = question.closest('.faq-item');
                const isActive = item.classList.contains('active');

                // Close all items
                document.querySelectorAll('.faq-item').forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const btn = otherItem.querySelector('.faq-question');
                    if (btn) btn.setAttribute('aria-expanded', 'false');
                });

                // Toggle selected item
                if (!isActive) {
                    item.classList.add('active');
                    question.setAttribute('aria-expanded', 'true');
                } else {
                    question.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Enquiry & Lead Form Submission Feedback
        const forms = document.querySelectorAll('.lead-form, .enquiry-form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const submitBtn = form.querySelector('button[type="submit"]');
                if (!submitBtn) return;

                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Submitting Details...';
                submitBtn.disabled = true;

                setTimeout(() => {
                    submitBtn.textContent = '✓ Counselling Request Received!';
                    submitBtn.style.backgroundColor = '#16a34a';
                    submitBtn.style.borderColor = '#16a34a';
                    submitBtn.style.color = '#FFFFFF';

                    let alertBox = form.querySelector('.form-alert-msg');
                    if (!alertBox) {
                        alertBox = document.createElement('div');
                        alertBox.className = 'form-alert-msg';
                        alertBox.style.cssText = 'margin-top: 1rem; padding: 0.85rem 1rem; background-color: #ecfdf5; border: 1px solid #a7f3d0; color: #065f46; font-size: 0.88rem; border-radius: 8px;';
                        form.appendChild(alertBox);
                    }
                    alertBox.textContent = 'Thank you! A senior academic counsellor from NIOS Career Point Berhampur will contact you shortly.';

                    setTimeout(() => {
                        form.reset();
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.backgroundColor = '';
                        submitBtn.style.borderColor = '';
                        submitBtn.style.color = '';
                    }, 3500);
                }, 800);
            });
        });

        // Replay Intro Button Trigger
        const replayButtons = document.querySelectorAll('.replay-intro-btn, #replay-intro-btn');
        replayButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (typeof window.replayIntroAnimation === 'function') {
                    window.replayIntroAnimation();
                } else {
                    window.location.href = 'index.html';
                }
            });
        });
    });
})();
