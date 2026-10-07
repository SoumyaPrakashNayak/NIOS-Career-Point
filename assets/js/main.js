/**
 * NIOS CAREER POINT BERHAMPUR - HOMEPAGE CONTROLLER
 * Vanilla JavaScript Implementation
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Header scroll effect
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // 2. FAQ Accordion interaction
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.closest('.faq-item');
            const isActive = item.classList.contains('active');

            // Close other items
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // 3. Admission Lead Form Feedback
    const leadForms = document.querySelectorAll('.lead-form');
    leadForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('.form-submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Submitting Details...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.textContent = '✓ Counseling Request Sent!';
                submitBtn.style.backgroundColor = '#16a34a';
                
                setTimeout(() => {
                    form.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.backgroundColor = '';
                    alert('Thank you! Our NIOS Admission Counselor in Berhampur will contact you shortly.');
                }, 1200);
            }, 800);
        });
    });

    // 4. Replay Intro Button handlers
    const replayButtons = document.querySelectorAll('.replay-intro-btn');
    replayButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (typeof window.replayIntroAnimation === 'function') {
                window.replayIntroAnimation();
            }
        });
    });
});
