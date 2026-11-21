/**
 * TAYYAB KHAN - PORTFOLIO INTERACTIVITY (Vanilla JavaScript)
 * Author: Tayyab Khan (Frontend & WordPress Developer)
 */

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------------------
    // 1. Project Data Store (10 Projects Details)
    // -------------------------------------------------------------------------
    const projectsData = [
        {
            id: 1,
            title: "Irhas Fashion & Apparel",
            category: "E-Commerce & WordPress",
            img: "assest/irhas.png",
            description: "A comprehensive modern e-commerce storefront tailored for fashion brands. Built with WordPress and WooCommerce utilizing OceanWP's versatile e-commerce framework.",
            features: [
                "Full WooCommerce catalog with dynamic attributes & variations",
                "Optimized AJAX cart and multi-step streamlined checkout",
                "Responsive mobile-first navigation and touch sliders",
                "Sub-2-second load times using image optimization & caching"
            ],
            tech: ["WordPress", "WooCommerce", "OceanWP", "CSS3", "JavaScript"]
        },
        {
            id: 2,
            title: "Interactive Chessboard UI",
            category: "Frontend & UI/UX",
            img: "assest/Screenshot 2026-11-19 183421(1).png",
            description: "A responsive, interactive chessboard application designed with pixel-perfect CSS Grid, semantic HTML5, and dynamic JavaScript logic for piece placement and board rendering.",
            features: [
                "Custom responsive 8x8 chessboard layout using CSS Grid",
                "Interactive pieces and board squares with smooth hover effects",
                "Mobile-friendly touch interaction and fluid scaling across screen sizes",
                "Clean, modular JavaScript logic with zero external library overhead"
            ],
            tech: ["HTML5", "CSS3 Grid", "JavaScript (ES6+)", "UI/UX Design"]
        },
        {
            id: 3,
            title: "KOFA Corporate Enterprise",
            category: "WordPress & Business",
            img: "assest/KOFA.jpeg",
            description: "Corporate consulting platform designed for an enterprise technology firm. Crafted using OceanWP, Elementor, and custom CSS styling for corporate authority.",
            features: [
                "Custom designed multi-page hierarchy for corporate services",
                "Integrated lead capture forms with instant notifications",
                "Case study portfolio filter with clean pagination",
                "Speed optimized with customized OceanWP headers and footers"
            ],
            tech: ["WordPress", "OceanWP", "Elementor", "SEO Best Practices"]
        },
        {
            id: 4,
            title: "My OLX Marketplace",
            category: "Frontend & Web App",
            img: "assest/MY olx.png",
            description: "An interactive online buy and sell classifieds marketplace web application featuring dynamic listings, search and filter functionality, and responsive UI.",
            features: [
                "Component-based UI architecture with modular CSS",
                "Dynamic search and category filtering for marketplace products",
                "Responsive product cards and detailed item view",
                "Optimized bundle size for instant mobile rendering"
            ],
            tech: ["HTML5", "JavaScript ES6+", "CSS3 Modules", "Responsive Design"]
        },
        {
            id: 5,
            title: "Sunrise Living & Estates",
            category: "WordPress & Real Estate",
            img: "assest/SUNRISE.jpeg",
            description: "A luxury property showcase portal featuring custom property listing post types, location maps, and responsive inquiry booking modules.",
            features: [
                "Custom fields for property size, bedrooms, price, and amenities",
                "Interactive photo gallery with modal view",
                "Direct WhatsApp and call integration for real estate agents",
                "Cross-device responsive grid for property listings"
            ],
            tech: ["WordPress", "OceanWP", "Custom Post Types", "CSS3"]
        },
        {
            id: 6,
            title: "Tasty Food Restaurant",
            category: "Frontend & Hospitality",
            img: "assest/tasty food.png",
            description: "An elegant restaurant landing page featuring interactive tabbed food & beverage menus, location map integration, and an intuitive reservation system.",
            features: [
                "Tab-based category menu filtering with pricing",
                "Interactive table reservation form with instant validation",
                "Client testimonials slider and featured meals showcase",
                "Optimized for high performance on 3G and 4G mobile networks"
            ],
            tech: ["HTML5", "CSS3 Flexbox", "JavaScript", "Responsive UI"]
        },
        {
            id: 7,
            title: "RedStore E-Commerce",
            category: "E-Commerce & WordPress",
            img: "assest/red store.png",
            description: "High-volume gadgets and apparel store engineered on WooCommerce with custom filtering by specs, brands, and price brackets.",
            features: [
                "Fast product search and filter sidebar without reload",
                "Product badges (New, Sale, Out of Stock, Featured)",
                "Seamless checkout process supporting credit card & COD",
                "Fully compatible with OceanWP's e-commerce customizer"
            ],
            tech: ["WordPress", "WooCommerce", "Payment Gateways", "Speed Tuning"]
        },
        {
            id: 8,
            title: "Urban Thread Apparel",
            category: "WordPress & Fashion",
            img: "assest/urban thread.png",
            description: "Modern fashion and apparel brand website featuring dynamic product collections, lookbooks, case study sliders, and mobile shopping flow.",
            features: [
                "Built with OceanWP and Elementor / Ocean Extra",
                "Interactive product catalogs with quick preview features",
                "Full SEO on-page markup and schema data integration",
                "Lead nurturing form triggers with validation"
            ],
            tech: ["WordPress", "OceanWP", "WooCommerce", "Elementor"]
        },
        {
            id: 9,
            title: "IronCore Fitness Studio",
            category: "Frontend & Fitness",
            img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=80",
            description: "A bold, energetic landing page for a premier fitness gym featuring dynamic class schedules, trainer bios, and a functional BMI calculator.",
            features: [
                "Client-side JavaScript interactive BMI calculator",
                "Weekly schedule timetable with filterable time slots",
                "Tiered membership pricing cards with clear calls-to-action",
                "High-contrast dark aesthetic with neon accents"
            ],
            tech: ["HTML5", "CSS3 Animations", "JavaScript", "Mobile-First"]
        },
        {
            id: 10,
            title: "Minimalist Dev Portfolio",
            category: "Frontend & React",
            img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=700&q=80",
            description: "A fast, clean personal branding portfolio for creative developers and designers. Features glassmorphic cards, smooth scrolling, and instant project preview modals.",
            features: [
                "Zero external bloated frameworks - lightweight and ultra fast",
                "Custom modal dialogs and filterable portfolio grid",
                "Integrated contact management with WhatsApp direct chat",
                "Full printable CV and resume preview generator"
            ],
            tech: ["HTML5", "CSS3 Variables", "JavaScript ES6+", "React Ready"]
        }
    ];

    // -------------------------------------------------------------------------
    // 2. Theme Toggle (Dark / Light Mode)
    // -------------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem('tayyab_theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('tayyab_theme', newTheme);
            showToast(`Switched to ${newTheme.toUpperCase()} mode`);
        });
    }

    // -------------------------------------------------------------------------
    // 3. Header Scroll Effect & Reading Progress Bar
    // -------------------------------------------------------------------------
    const header = document.getElementById('header');
    const progressBar = document.getElementById('scroll-progress');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        // Progress bar
        if (progressBar) {
            progressBar.style.width = `${scrollPercent}%`;
        }

        // Header glass styling on scroll
        if (header) {
            if (scrollTop > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        // Back to top button visibility
        if (backToTopBtn) {
            if (scrollTop > 500) {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.visibility = 'visible';
            } else {
                backToTopBtn.style.opacity = '0.7';
            }
        }
    });

    // -------------------------------------------------------------------------
    // 4. Mobile Menu Toggle
    // -------------------------------------------------------------------------
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // -------------------------------------------------------------------------
    // 5. Active Nav Link on Scroll
    // -------------------------------------------------------------------------
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset + 120;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop;
            const sectionId = current.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-list a[href*="${sectionId}"]`);

            if (correspondingLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    correspondingLink.classList.add('active');
                } else {
                    correspondingLink.classList.remove('active');
                }
            }
        });
    });

    // -------------------------------------------------------------------------
    // 6. Portfolio Category Filter
    // -------------------------------------------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category') || '';
                if (filterValue === 'all' || category.includes(filterValue)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
                }
            });
        });
    });

    // -------------------------------------------------------------------------
    // 7. Project Quick View Modal
    // -------------------------------------------------------------------------
    const projectModal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');

    function openProjectModal(projectId) {
        const project = projectsData.find(p => p.id === parseInt(projectId));
        if (!project || !modalBody || !projectModal) return;

        modalBody.innerHTML = `
            <div class="modal-project-view">
                <div class="modal-project-img-box" style="margin-bottom: 1.5rem; border-radius: var(--radius-md); overflow: hidden; max-height: 320px; background: rgba(0, 0, 0, 0.25); display: flex; justify-content: center; align-items: center;">
                    <img src="${project.img}" alt="${project.title}" style="max-width: 100%; max-height: 320px; object-fit: contain;">
                </div>
                <div class="modal-project-header" style="margin-bottom: 1rem;">
                    <span class="project-tag" style="position: static; margin-bottom: 0.5rem; display: inline-block;">${project.category}</span>
                    <h2 style="font-size: 1.8rem; margin: 0.5rem 0;">${project.title}</h2>
                </div>
                <p style="color: var(--text-secondary); font-size: 1rem; line-height: 1.6; margin-bottom: 1.5rem;">${project.description}</p>
                
                <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; color: var(--primary-light);">Key Features & Deliverables:</h4>
                <ul style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem;">
                    ${project.features.map(f => `<li style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-secondary); font-size: 0.92rem;"><i class="fa-solid fa-check" style="color: var(--success);"></i> ${f}</li>`).join('')}
                </ul>

                <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; color: var(--primary-light);">Technologies Used:</h4>
                <div class="project-tech" style="margin-bottom: 2rem;">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>

                <div style="display: flex; flex-wrap: wrap; gap: 1rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
                    <a href="#contact" class="btn btn-primary" onclick="closeModals()">
                        <i class="fa-solid fa-paper-plane"></i> Request Similar Project
                    </a>
                    <a href="https://wa.me/923152748320?text=Hi%20Tayyab,%20I%20am%20interested%20in%20your%20project:%20${encodeURIComponent(project.title)}" target="_blank" class="btn btn-whatsapp">
                        <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                    </a>
                </div>
            </div>
        `;

        projectModal.classList.add('active');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    document.querySelectorAll('.open-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = btn.getAttribute('data-id');
            openProjectModal(id);
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', closeModals);
    }

    // -------------------------------------------------------------------------
    // 8. CV Modal & Print Functionality
    // -------------------------------------------------------------------------
    const downloadCvBtn = document.getElementById('download-cv-btn');
    const cvModal = document.getElementById('cv-modal');
    const cvModalClose = document.getElementById('cv-modal-close');
    const printCvBtn = document.getElementById('print-cv-btn');

    if (downloadCvBtn && cvModal) {
        downloadCvBtn.addEventListener('click', () => {
            cvModal.classList.add('active');
            cvModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        });
    }

    if (cvModalClose) {
        cvModalClose.addEventListener('click', closeModals);
    }

    if (printCvBtn) {
        printCvBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // Common modal close function
    function closeModals() {
        if (projectModal) {
            projectModal.classList.remove('active');
            projectModal.setAttribute('aria-hidden', 'true');
        }
        if (cvModal) {
            cvModal.classList.remove('active');
            cvModal.setAttribute('aria-hidden', 'true');
        }
        document.body.style.overflow = '';
    }

    // Close modal on click outside content
    window.addEventListener('click', (e) => {
        if (e.target === projectModal || e.target === cvModal) {
            closeModals();
        }
    });

    // Close modal on Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModals();
        }
    });

    // -------------------------------------------------------------------------
    // 9. Interactive Contact Form with Validation & WhatsApp Integration
    // -------------------------------------------------------------------------
    const contactForm = document.getElementById('contact-form');
    const feedbackBox = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('form-submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('user-name').value.trim();
            const email = document.getElementById('user-email').value.trim();
            const subject = document.getElementById('user-subject').value.trim();
            const message = document.getElementById('user-message').value.trim();

            if (!name || !email || !subject || !message) {
                if (feedbackBox) {
                    feedbackBox.className = 'form-feedback error';
                    feedbackBox.textContent = 'Please fill out all required fields.';
                }
                return;
            }

            // Simple email regex check
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                if (feedbackBox) {
                    feedbackBox.className = 'form-feedback error';
                    feedbackBox.textContent = 'Please enter a valid email address.';
                }
                return;
            }

            // Simulate sending feedback & open mailto
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>`;
            }

            setTimeout(() => {
                if (feedbackBox) {
                    feedbackBox.className = 'form-feedback success';
                    feedbackBox.innerHTML = `
                        <strong>Thank you, ${name}!</strong> Your message has been prepared.<br>
                        Opening your email app to send to <strong>muhammadtayyabkhan679@gmail.com</strong>.
                    `;
                }

                // Construct mailto
                const mailtoUrl = `mailto:muhammadtayyabkhan679@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;
                window.location.href = mailtoUrl;

                showToast('Message ready! Email client triggered.');

                contactForm.reset();

                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = `<span>Send Message</span> <i class="fa-solid fa-paper-plane"></i>`;
                }
            }, 800);
        });
    }

    // -------------------------------------------------------------------------
    // 10. Toast Notification Helper
    // -------------------------------------------------------------------------
    function showToast(message, duration = 3000) {
        const toast = document.getElementById('toast');
        if (!toast) return;

        toast.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, duration);
    }

    // -------------------------------------------------------------------------
    // 11. Interactive Custom Cursor & Ambient Mouse Glow Effect
    // -------------------------------------------------------------------------
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');
    const cursorGlow = document.getElementById('cursor-glow');

    if (cursorDot && cursorOutline && window.matchMedia('(pointer: fine)').matches) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let outlineX = mouseX;
        let outlineY = mouseY;
        let glowX = mouseX;
        let glowY = mouseY;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Direct dot tracking
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        });

        // Smooth trailing animation loop using requestAnimationFrame
        function animateCursor() {
            outlineX += (mouseX - outlineX) * 0.18;
            outlineY += (mouseY - outlineY) * 0.18;
            cursorOutline.style.left = `${outlineX}px`;
            cursorOutline.style.top = `${outlineY}px`;

            if (cursorGlow) {
                glowX += (mouseX - glowX) * 0.08;
                glowY += (mouseY - glowY) * 0.08;
                cursorGlow.style.left = `${glowX}px`;
                cursorGlow.style.top = `${glowY}px`;
            }

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover effect over interactive elements
        const hoverTargets = document.querySelectorAll('a, button, input, textarea, .project-card, .skill-card, .service-card, .hero-sub-badge, .about-card, .social-icon');
        hoverTargets.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.classList.add('cursor-hover');
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1.6)';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.classList.remove('cursor-hover');
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });

        // Click compression feedback
        window.addEventListener('mousedown', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(0.8)';
        });
        window.addEventListener('mouseup', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        });

        // Hide cursor when leaving browser viewport
        document.addEventListener('mouseleave', () => {
            cursorDot.style.opacity = '0';
            cursorOutline.style.opacity = '0';
            if (cursorGlow) cursorGlow.style.opacity = '0';
        });
        document.addEventListener('mouseenter', () => {
            cursorDot.style.opacity = '1';
            cursorOutline.style.opacity = '1';
            if (cursorGlow) cursorGlow.style.opacity = '1';
        });
    }
});
