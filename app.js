// Professional DevOps Portfolio - Enhanced Interactive Features
class ProfessionalPortfolio {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particles = null;
        this.isLoading = true;
        this.animatedElements = new Set();
        
        this.init();
    }

    async init() {
        await this.initLoader();
        this.initThreeJS();
        this.initTypingAnimation();
        this.initScrollEffects();
        this.initNavigation();
        this.initIntersectionObserver();
        this.initContactForm();
        this.initMobileNav();
        this.initScrollToTop();
        this.bindEvents();
    }

    // Professional Loader Implementation
    async initLoader() {
        const loader = document.getElementById('loader');
        const progressFill = document.querySelector('.progress-fill');
        const progressText = document.querySelector('.progress-text');
        
        // Create loader particles
        this.createLoaderParticles();
        
        // Simulate loading stages
        const loadingStages = [
            { progress: 20, text: 'Initializing DevOps Portfolio...' },
            { progress: 40, text: 'Loading Infrastructure...' },
            { progress: 60, text: 'Setting up CI/CD Pipeline...' },
            { progress: 80, text: 'Deploying Components...' },
            { progress: 100, text: 'Ready for Production!' }
        ];
        
        for (let i = 0; i < loadingStages.length; i++) {
            const stage = loadingStages[i];
            await this.updateProgress(progressFill, progressText, stage.progress, stage.text);
            await this.delay(600);
        }
        
        // Final transition
        await this.delay(500);
        loader.classList.add('hidden');
        
        // Remove loader after transition
        setTimeout(() => {
            loader.remove();
            this.isLoading = false;
            this.triggerEntranceAnimations();
        }, 500);
    }

    createLoaderParticles() {
        const container = document.querySelector('.loader-particles');
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: rgba(33, 128, 141, ${Math.random() * 0.5 + 0.2});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float-loader ${Math.random() * 3 + 2}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
            `;
            container.appendChild(particle);
        }
        
        // Add float animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float-loader {
                0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
                50% { transform: translateY(-20px) scale(1.1); opacity: 0.3; }
            }
        `;
        document.head.appendChild(style);
    }

    async updateProgress(progressFill, progressText, progress, text) {
        return new Promise(resolve => {
            progressFill.style.width = `${progress}%`;
            progressText.textContent = text;
            setTimeout(resolve, 200);
        });
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Three.js Professional Background
    initThreeJS() {
        const container = document.getElementById('three-background');
        
        // Scene setup
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000, 0);
        container.appendChild(this.renderer.domElement);
        
        // Create professional particle system
        this.createProfessionalParticles();
        
        // Camera position
        this.camera.position.z = 5;
        
        // Start animation loop
        this.animate();
        
        // Handle resize
        window.addEventListener('resize', () => this.onWindowResize());
    }

    createProfessionalParticles() {
        const particleCount = 100;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);
        
        // Professional color palette
        const colorPalette = [
            new THREE.Color(0x218085), // Teal
            new THREE.Color(0x2DA6B2), // Light Teal
            new THREE.Color(0x45D4E7), // Cyan
            new THREE.Color(0x62778C), // Slate
        ];
        
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            
            // Positions - spread across screen with depth
            positions[i3] = (Math.random() - 0.5) * 20;
            positions[i3 + 1] = (Math.random() - 0.5) * 20;
            positions[i3 + 2] = (Math.random() - 0.5) * 10;
            
            // Colors - pick from professional palette
            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;
            
            // Sizes - subtle variation
            sizes[i] = Math.random() * 3 + 1;
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        
        // Professional shader material
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 }
            },
            vertexShader: `
                attribute float size;
                attribute vec3 color;
                varying vec3 vColor;
                uniform float time;
                
                void main() {
                    vColor = color;
                    vec3 pos = position;
                    
                    // Subtle floating animation
                    pos.y += sin(time * 0.5 + position.x * 0.1) * 0.1;
                    pos.x += cos(time * 0.3 + position.y * 0.1) * 0.05;
                    
                    vec4 modelViewPosition = modelViewMatrix * vec4(pos, 1.0);
                    gl_Position = projectionMatrix * modelViewPosition;
                    gl_PointSize = size * (300.0 / -modelViewPosition.z);
                }
            `,
            fragmentShader: `
                varying vec3 vColor;
                
                void main() {
                    float distance = length(gl_PointCoord - vec2(0.5));
                    if (distance > 0.5) discard;
                    
                    float alpha = 1.0 - (distance * 2.0);
                    alpha *= 0.3; // Professional opacity
                    
                    gl_FragColor = vec4(vColor, alpha);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending
        });
        
        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }

    animate() {
        if (!this.renderer) return;
        
        requestAnimationFrame(() => this.animate());
        
        const time = Date.now() * 0.001;
        
        if (this.particles) {
            // Subtle rotation
            this.particles.rotation.y = time * 0.05;
            this.particles.rotation.x = time * 0.02;
            
            // Update shader time
            this.particles.material.uniforms.time.value = time;
        }
        
        // Camera movement based on scroll
        if (!this.isLoading) {
            const scrollPercent = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
            this.camera.position.y = scrollPercent * 2;
        }
        
        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        if (!this.camera || !this.renderer) return;
        
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // Professional Typing Animation
    initTypingAnimation() {
        const texts = [
            "KodeKloud Certified DevOps Engineer",
            "Cloud Infrastructure Specialist",
            "Automation & CI/CD Expert",
            "Kubernetes & Docker Professional"
        ];
        
        const typingElement = document.querySelector('.typing-text');
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        const typeSpeed = 80;
        const deleteSpeed = 40;
        const pauseTime = 2000;
        
        const type = () => {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let nextDelay = isDeleting ? deleteSpeed : typeSpeed;
            
            if (!isDeleting && charIndex === currentText.length) {
                nextDelay = pauseTime;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
            
            setTimeout(type, nextDelay);
        };
        
        // Start after loader
        setTimeout(() => {
            if (!this.isLoading) type();
        }, 1000);
    }

    // Enhanced Scroll Effects
    initScrollEffects() {
        const navbar = document.querySelector('.navbar');
        let lastScrollY = window.scrollY;
        
        const handleScroll = this.throttle(() => {
            const currentScrollY = window.scrollY;
            
            // Navbar scroll effect
            if (currentScrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Update active navigation
            this.updateActiveNavigation();
            
            // Show/hide scroll to top
            this.updateScrollToTop(currentScrollY);
            
            lastScrollY = currentScrollY;
        }, 16);
        
        window.addEventListener('scroll', handleScroll);
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Navigation Management
    initNavigation() {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.nav-link');
    }

    updateActiveNavigation() {
        let current = '';
        
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Intersection Observer for Animations
    initIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
                    this.animatedElements.add(entry.target);
                    entry.target.classList.add('fade-in');
                    
                    // Trigger specific animations
                    if (entry.target.classList.contains('skill-category')) {
                        this.animateSkillBars(entry.target);
                    }
                    
                    if (entry.target.classList.contains('stat')) {
                        this.animateCounter(entry.target);
                    }
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animatedElements = document.querySelectorAll(
            '.highlight-item, .timeline-item, .project-card, .skill-category, .contact-card, .stat'
        );
        
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }

    // Skill Bar Animations
    animateSkillBars(skillCategory) {
        const skillBars = skillCategory.querySelectorAll('.skill-progress');
        
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = `${progress}%`;
            }, index * 150);
        });
    }

    // Counter Animations
    animateCounter(statElement) {
        const numberElement = statElement.querySelector('.stat-number');
        if (!numberElement) return;
        
        const text = numberElement.textContent;
        const number = parseInt(text.replace(/[^\d]/g, ''));
        const suffix = text.replace(/[\d]/g, '');
        
        let current = 0;
        const increment = number / 60;
        const duration = 1000;
        const stepDuration = duration / 60;
        
        const updateCounter = () => {
            current += increment;
            
            if (current < number) {
                numberElement.textContent = Math.floor(current) + suffix;
                setTimeout(updateCounter, stepDuration);
            } else {
                numberElement.textContent = number + suffix;
            }
        };
        
        updateCounter();
    }

    // Professional Contact Form
    initContactForm() {
        const form = document.querySelector('.contact-form');
        const inputs = form.querySelectorAll('.form-control');
        
        // Enhanced form validation
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('focus', () => this.clearFieldError(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission(form);
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Basic validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        } else if (field.type === 'email' && value && !this.isValidEmail(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
        
        if (!isValid) {
            this.showFieldError(field, errorMessage);
        } else {
            this.clearFieldError(field);
        }
        
        return isValid;
    }

    showFieldError(field, message) {
        field.style.borderColor = 'var(--color-error)';
        
        // Remove existing error message
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) existingError.remove();
        
        // Add error message
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            color: var(--color-error);
            font-size: var(--font-size-sm);
            margin-top: var(--space-4);
        `;
        field.parentNode.appendChild(errorElement);
    }

    clearFieldError(field) {
        field.style.borderColor = 'var(--color-border)';
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) errorElement.remove();
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async handleFormSubmission(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Validate all fields
        const inputs = form.querySelectorAll('.form-control');
        let isFormValid = true;
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isFormValid = false;
            }
        });
        
        if (!isFormValid) {
            this.showNotification('Please fix the errors above', 'error');
            return;
        }
        
        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<span>Sending...</span>';
        submitButton.disabled = true;
        
        // Simulate form submission
        await this.delay(2000);
        
        // Reset form and show success
        form.reset();
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
    }

    // Mobile Navigation
    initMobileNav() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Animate hamburger
            const spans = hamburger.querySelectorAll('span');
            if (hamburger.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // Scroll to Top Button
    initScrollToTop() {
        const scrollBtn = document.createElement('button');
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.innerHTML = '↑';
        scrollBtn.setAttribute('aria-label', 'Scroll to top');
        
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        document.body.appendChild(scrollBtn);
        this.scrollToTopBtn = scrollBtn;
    }

    updateScrollToTop(scrollY) {
        if (scrollY > 300) {
            this.scrollToTopBtn.classList.add('visible');
        } else {
            this.scrollToTopBtn.classList.remove('visible');
        }
    }

    // Notification System
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 16px 24px;
            background: ${type === 'success' ? 'var(--color-success)' : type === 'error' ? 'var(--color-error)' : 'var(--color-info)'};
            color: white;
            border-radius: var(--radius-base);
            z-index: 10000;
            animation: slideInNotification 0.3s ease-out;
            box-shadow: var(--shadow-lg);
            max-width: 300px;
            font-size: var(--font-size-sm);
        `;
        notification.textContent = message;
        
        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInNotification {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutNotification {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutNotification 0.3s ease-out forwards';
            setTimeout(() => {
                notification.remove();
                style.remove();
            }, 300);
        }, 4000);
    }

    // Entrance Animations
    triggerEntranceAnimations() {
        const heroElements = document.querySelectorAll('.hero-content > *');
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('fade-in');
            }, index * 200);
        });
    }

    // Utility Functions
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Event Bindings
    bindEvents() {
        // Handle resume download
        document.querySelector('.download-resume')?.addEventListener('click', (e) => {
            // Analytics or tracking can be added here
            console.log('Resume download initiated');
        });
        
        // Handle scroll indicator click
        document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
            document.querySelector('#about').scrollIntoView({
                behavior: 'smooth'
            });
        });
        
        // Add hover effects to project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                if (this.particles) {
                    // Subtle particle effect on hover
                    this.particles.material.uniforms.time.value += 0.1;
                }
            });
        });
    }
}

// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProfessionalPortfolio();
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause heavy animations when tab is not visible
        console.log('Portfolio paused for performance');
    } else {
        // Resume animations when tab becomes visible
        console.log('Portfolio resumed');
    }
});

// Add custom cursor effect for professional touch
document.addEventListener('mousemove', (e) => {
    // Subtle cursor trail effect
    const trail = document.createElement('div');
    trail.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 4px;
        height: 4px;
        background: rgba(33, 128, 141, 0.3);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: cursorTrail 0.6s ease-out forwards;
    `;
    
    document.body.appendChild(trail);
    
    setTimeout(() => trail.remove(), 600);
});

// Add cursor trail animation
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    @keyframes cursorTrail {
        0% { 
            transform: scale(1);
            opacity: 1;
        }
        100% { 
            transform: scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(cursorStyle);

// Performance monitoring
const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
        if (entry.entryType === 'measure') {
            console.log(`${entry.name}: ${entry.duration}ms`);
        }
    });
});

observer.observe({ entryTypes: ['measure'] });

// Error handling
window.addEventListener('error', (e) => {
    console.error('Portfolio error:', e.error);
    // Graceful degradation - continue without Three.js if needed
});

// Service worker registration for PWA capabilities (optional enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Could register a service worker for offline functionality
        console.log('Portfolio ready for PWA enhancement');
    });
}