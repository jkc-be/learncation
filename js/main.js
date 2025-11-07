/**
 * Learnoliday - Main JavaScript
 * Progressive enhancement for interactivity
 * All features are enhancements - site works without JavaScript
 */

(function() {
    'use strict';

    // ============================================
    // 1. MOBILE MENU TOGGLE
    // ============================================

    function initMobileMenu() {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const mainNav = document.querySelector('.main-nav');

        if (!menuToggle || !mainNav) return;

        menuToggle.addEventListener('click', function() {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

            // Toggle aria-expanded
            menuToggle.setAttribute('aria-expanded', !isExpanded);

            // Toggle mobile-open class
            mainNav.classList.toggle('mobile-open');

            // Update button text for screen readers
            const buttonText = menuToggle.querySelector('span');
            if (buttonText) {
                buttonText.textContent = isExpanded ? 'Menu' : 'Close';
            }
        });

        // Close menu when clicking nav links
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('mobile-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) {
                mainNav.classList.remove('mobile-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu on Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && mainNav.classList.contains('mobile-open')) {
                mainNav.classList.remove('mobile-open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.focus();
            }
        });
    }

    // ============================================
    // 2. SMOOTH SCROLLING
    // ============================================

    function initSmoothScrolling() {
        // Get all anchor links that start with #
        const anchorLinks = document.querySelectorAll('a[href^="#"]');

        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                // Skip if href is just "#" or empty
                if (!href || href === '#') return;

                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    e.preventDefault();

                    // Smooth scroll to target
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Update URL without jumping
                    if (history.pushState) {
                        history.pushState(null, null, href);
                    }

                    // Focus target for accessibility (skip links)
                    targetElement.focus({ preventScroll: true });

                    // If target is not focusable, make it temporarily focusable
                    if (!targetElement.hasAttribute('tabindex')) {
                        targetElement.setAttribute('tabindex', '-1');
                    }
                }
            });
        });
    }

    // ============================================
    // 3. FAQ ACCORDION
    // ============================================

    function initFAQAccordion() {
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');

            if (!question || !answer) return;

            // Set initial state
            question.setAttribute('role', 'button');
            question.setAttribute('aria-expanded', 'false');
            question.setAttribute('tabindex', '0');

            // Generate unique ID for answer
            const answerId = 'faq-answer-' + Math.random().toString(36).substr(2, 9);
            answer.id = answerId;
            question.setAttribute('aria-controls', answerId);

            // Initially hide answer
            answer.style.display = 'none';

            // Click handler
            question.addEventListener('click', function() {
                toggleFAQ(item, question, answer);
            });

            // Keyboard handler (Enter and Space)
            question.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFAQ(item, question, answer);
                }
            });
        });

        function toggleFAQ(item, question, answer) {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';

            // Close all other FAQs (optional - remove if you want multiple open)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherQuestion = otherItem.querySelector('.faq-question');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherQuestion && otherAnswer) {
                        otherQuestion.setAttribute('aria-expanded', 'false');
                        otherAnswer.style.display = 'none';
                        otherItem.classList.remove('active');
                    }
                }
            });

            // Toggle current FAQ
            question.setAttribute('aria-expanded', !isExpanded);
            answer.style.display = isExpanded ? 'none' : 'block';
            item.classList.toggle('active');
        }
    }

    // ============================================
    // 4. FORM VALIDATION
    // ============================================

    function initFormValidation() {
        const contactForm = document.getElementById('contact-form');

        if (!contactForm) return;

        // Custom validation messages
        const validationMessages = {
            valueMissing: 'This field is required',
            typeMismatch: {
                email: 'Please enter a valid email address',
                tel: 'Please enter a valid phone number'
            },
            tooShort: 'This input is too short',
            patternMismatch: 'Please match the requested format'
        };

        // Add novalidate to use custom validation
        contactForm.setAttribute('novalidate', 'true');

        // Real-time validation on blur
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });

            // Remove error styling on input
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    this.classList.remove('error');
                    removeErrorMessage(this);
                }
            });
        });

        // Form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            let isValid = true;

            // Validate all fields
            inputs.forEach(input => {
                // Skip honeypot field
                if (input.name === 'website') return;

                if (!validateField(input)) {
                    isValid = false;
                }
            });

            if (isValid) {
                // Check honeypot
                const honeypot = contactForm.querySelector('input[name="website"]');
                if (honeypot && honeypot.value !== '') {
                    console.warn('Spam detected');
                    return;
                }

                // Show success message
                showFormSuccess();

                // In production, you would submit the form here
                // For now, just log the data
                const formData = new FormData(contactForm);
                console.log('Form submitted:', Object.fromEntries(formData));

                // Reset form
                contactForm.reset();
            } else {
                // Focus first error field
                const firstError = contactForm.querySelector('.error');
                if (firstError) {
                    firstError.focus();
                }
            }
        });

        function validateField(field) {
            // Skip honeypot
            if (field.name === 'website') return true;

            const validity = field.validity;

            // Remove previous error
            removeErrorMessage(field);
            field.classList.remove('error');

            if (validity.valid) {
                field.classList.add('valid');
                return true;
            }

            // Field is invalid
            field.classList.remove('valid');
            field.classList.add('error');

            // Determine error message
            let errorMessage = '';

            if (validity.valueMissing) {
                errorMessage = validationMessages.valueMissing;
            } else if (validity.typeMismatch) {
                errorMessage = validationMessages.typeMismatch[field.type] || 'Invalid format';
            } else if (validity.tooShort) {
                errorMessage = validationMessages.tooShort;
            } else if (validity.patternMismatch) {
                errorMessage = validationMessages.patternMismatch;
            } else {
                errorMessage = 'Please check this field';
            }

            // Show error message
            showErrorMessage(field, errorMessage);

            return false;
        }

        function showErrorMessage(field, message) {
            const errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            errorElement.textContent = message;
            errorElement.setAttribute('role', 'alert');

            // Insert after field
            field.parentNode.insertBefore(errorElement, field.nextSibling);

            // Update aria-invalid
            field.setAttribute('aria-invalid', 'true');
        }

        function removeErrorMessage(field) {
            const errorElement = field.parentNode.querySelector('.field-error');
            if (errorElement) {
                errorElement.remove();
            }
            field.removeAttribute('aria-invalid');
        }

        function showFormSuccess() {
            // Create success message
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success';
            successMessage.setAttribute('role', 'alert');
            successMessage.innerHTML = '<p>✓ Thank you! Your message has been sent successfully. We\'ll get back to you soon.</p>';

            // Insert at top of form
            contactForm.insertBefore(successMessage, contactForm.firstChild);

            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            // Remove after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        }
    }

    // ============================================
    // 5. SCROLL ANIMATIONS
    // ============================================

    function initScrollAnimations() {
        // Check if Intersection Observer is supported
        if (!('IntersectionObserver' in window)) {
            // Fallback: show all elements
            const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .scale-in');
            animatedElements.forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'none';
            });
            return;
        }

        // Elements to animate on scroll
        const animatedElements = document.querySelectorAll('.program-card, .feature-card, .testimonial-card, .faq-item');

        // Add animation classes
        animatedElements.forEach(el => {
            el.classList.add('fade-in');
        });

        // Observer options
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        // Observer callback
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optionally unobserve after animation
                    // observer.unobserve(entry.target);
                }
            });
        };

        // Create observer
        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all animated elements
        animatedElements.forEach(el => {
            observer.observe(el);
        });

        // Stagger animations for cards in the same section
        document.querySelectorAll('.programs-grid, .features-grid, .testimonials-grid').forEach(grid => {
            const cards = grid.querySelectorAll('.program-card, .feature-card, .testimonial-card');
            cards.forEach((card, index) => {
                card.style.transitionDelay = `${index * 0.1}s`;
            });
        });
    }

    // ============================================
    // 6. HEADER SCROLL BEHAVIOR
    // ============================================

    function initHeaderScroll() {
        const header = document.querySelector('.site-header');
        if (!header) return;

        let lastScroll = 0;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            // Add shadow when scrolled
            if (currentScroll > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Hide header on scroll down, show on scroll up (optional)
            // Uncomment if you want this behavior:
            /*
            if (currentScroll > lastScroll && currentScroll > 100) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
            */

            lastScroll = currentScroll;
        });
    }

    // ============================================
    // 7. EXTERNAL LINKS
    // ============================================

    function initExternalLinks() {
        // Add target="_blank" and rel="noopener noreferrer" to external links
        const links = document.querySelectorAll('a[href^="http"]');

        links.forEach(link => {
            const url = new URL(link.href);

            // Check if link is external
            if (url.hostname !== window.location.hostname) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');

                // Add visual indicator (optional)
                // link.classList.add('external-link');
            }
        });
    }

    // ============================================
    // 8. SCROLL TO TOP BUTTON (Optional Enhancement)
    // ============================================

    function initScrollToTop() {
        // Create button
        const scrollButton = document.createElement('button');
        scrollButton.className = 'scroll-to-top';
        scrollButton.setAttribute('aria-label', 'Scroll to top');
        scrollButton.innerHTML = '↑';
        scrollButton.style.display = 'none';

        document.body.appendChild(scrollButton);

        // Show/hide based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollButton.style.display = 'block';
            } else {
                scrollButton.style.display = 'none';
            }
        });

        // Click handler
        scrollButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ============================================
    // 9. PERFORMANCE: Debounce Helper
    // ============================================

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ============================================
    // 10. TRANSLATION SYSTEM
    // ============================================

    function initTranslations() {
        const langSelect = document.getElementById('lang-select');
        if (!langSelect) return;

        // Load saved language or default to English
        const savedLang = localStorage.getItem('preferredLanguage') || 'en';
        setLanguage(savedLang);

        // Language change handler
        langSelect.addEventListener('change', function() {
            const selectedLang = this.value;
            setLanguage(selectedLang);
            localStorage.setItem('preferredLanguage', selectedLang);
        });
    }

    function setLanguage(lang) {
        // Update select dropdown
        const langSelect = document.getElementById('lang-select');
        if (langSelect) {
            langSelect.value = lang;
        }

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Get translation data for selected language
        const langData = translations[lang] || translations['en'];

        // Translate all elements with data-translate attribute
        const elementsToTranslate = document.querySelectorAll('[data-translate]');

        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');

            if (langData[key]) {
                // Handle special cases for nested HTML
                if (key === 'about_title') {
                    element.innerHTML = langData[key].replace('Learncation', '<span class="text-highlight">Learncation</span>');
                } else if (key === 'programs_title') {
                    element.innerHTML = langData[key].replace('Programs', '<span class="text-highlight">Programs</span>');
                } else if (key === 'programs_title' && element.querySelector('.text-highlight')) {
                    // Keep the highlight span
                    const highlightText = element.querySelector('.text-highlight').textContent;
                    element.innerHTML = langData[key].replace(highlightText, `<span class="text-highlight">${highlightText}</span>`);
                } else {
                    element.textContent = langData[key];
                }
            }
        });

        // Handle program features (arrays)
        translateProgramFeatures(lang);
    }

    function translateProgramFeatures(lang) {
        const langData = translations[lang] || translations['en'];

        // Check if program features exist in translation data
        if (!langData.program_hk_features || !langData.program_online_features) {
            return;
        }

        // Translate Hong Kong program features
        const hkFeaturesList = document.querySelector('.program-hk .program-features');
        if (hkFeaturesList && langData.program_hk_features) {
            const items = hkFeaturesList.querySelectorAll('li');
            items.forEach((item, index) => {
                if (langData.program_hk_features[index]) {
                    item.textContent = langData.program_hk_features[index];
                }
            });
        }

        // Translate Online program features
        const onlineFeaturesList = document.querySelector('.program-online .program-features');
        if (onlineFeaturesList && langData.program_online_features) {
            const items = onlineFeaturesList.querySelectorAll('li');
            items.forEach((item, index) => {
                if (langData.program_online_features[index]) {
                    item.textContent = langData.program_online_features[index];
                }
            });
        }
    }

    // ============================================
    // INITIALIZE ALL FEATURES
    // ============================================

    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeFeatures);
        } else {
            initializeFeatures();
        }
    }

    function initializeFeatures() {
        // Initialize all features
        initMobileMenu();
        initSmoothScrolling();
        initFAQAccordion();
        initFormValidation();
        initScrollAnimations();
        initHeaderScroll();
        initExternalLinks();
        initScrollToTop();
        initTranslations();

        console.log('Learncation: All features initialized');
    }

    // Start initialization
    init();

})();
