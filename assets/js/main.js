/**
 * NIOS CAREER POINT BERHAMPUR - ACADEMIC PORTAL CONTROLLER
 * Vanilla JavaScript Implementation
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Header scroll elevation effect
    const header = document.querySelector('.site-header');
    if (header) {
        const handleScroll = () => {
            if (window.scrollY > 24) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }

    // 2. Mobile navigation drawer toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Close mobile drawer upon clicking any navigation link
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

    // 3. Accessible FAQ Accordion
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

    // 4. Institutional Enquiry & Lead Form Submission
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

                // Display success message
                let alertBox = form.querySelector('.form-alert-msg');
                if (!alertBox) {
                    alertBox = document.createElement('div');
                    alertBox.className = 'form-alert-msg';
                    alertBox.style.cssText = 'margin-top: 1rem; padding: 0.85rem 1rem; background-color: #ecfdf5; border: 1px solid #a7f3d0; color: #065f46; font-size: 0.88rem; border-radius: 2px;';
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

    // 5. Replay Intro Button Trigger
    const replayButtons = document.querySelectorAll('.replay-intro-btn');
    replayButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (typeof window.replayIntroAnimation === 'function') {
                window.replayIntroAnimation();
            } else {
                window.location.reload();
            }
        });
    });
});
