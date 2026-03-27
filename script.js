// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.feature-card, .step, .workout-type-card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Counter animation for stats
const animateCounter = (element, target, duration = 2000) => {
    let current = 0;
    const increment = target / (duration / 16);
    const isDecimal = target.toString().includes('.');
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            if (isDecimal) {
                element.textContent = current.toFixed(1);
            } else if (target >= 1000) {
                element.textContent = Math.floor(current / 1000) + 'K+';
            } else {
                element.textContent = Math.floor(current);
            }
            requestAnimationFrame(updateCounter);
        } else {
            if (isDecimal) {
                element.textContent = target.toFixed(1) + '★';
            } else if (target >= 1000) {
                element.textContent = Math.floor(target / 1000) + 'K+';
            } else {
                element.textContent = target;
            }
        }
    };
    
    updateCounter();
};

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const statValue = entry.target.querySelector('.stat-value');
            const text = statValue.textContent;
            
            if (text.includes('K+')) {
                const value = parseInt(text) * 1000;
                animateCounter(statValue, value);
            } else if (text.includes('★')) {
                const value = parseFloat(text);
                animateCounter(statValue, value);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// Phone mockup 3D effect
const phoneMockup = document.querySelector('.phone-mockup');
const phoneFrame = document.querySelector('.phone-frame');

if (phoneMockup && phoneFrame) {
    phoneMockup.addEventListener('mousemove', (e) => {
        const rect = phoneMockup.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        phoneFrame.style.transform = `
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg)
        `;
    });
    
    phoneMockup.addEventListener('mouseleave', () => {
        phoneFrame.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
}

// Download button tracking (placeholder)
const downloadButtons = document.querySelectorAll('.store-button, .btn-primary');
downloadButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Add analytics tracking here
        console.log('Download button clicked:', button.textContent.trim());
        
        // Placeholder alert for demo
        if (button.classList.contains('store-button')) {
            e.preventDefault();
            alert('App coming soon to the App Store and Google Play!');
        }
    });
});

// Add active class to navigation based on scroll position
const sections = document.querySelectorAll('section[id]');

const highlightNavigation = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-links a[href*=${sectionId}]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-links a[href*=${sectionId}]`)?.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', highlightNavigation);

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.gradient-orb');
    
    parallaxElements.forEach((el, index) => {
        const speed = (index + 1) * 0.05;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Console message
console.log(`
    ████████╗██╗  ██╗ █████╗ ███╗   ██╗██╗  ██╗███████╗
    ╚══██╔══╝██║  ██║██╔══██╗████╗  ██║██║ ██╔╝██╔════╝
       ██║   ███████║███████║██╔██╗ ██║█████╔╝ ███████╗
       ██║   ██╔══██║██╔══██║██║╚██╗██║██╔═██╗ ╚════██║
       ██║   ██║  ██║██║  ██║██║ ╚████║██║  ██╗███████║
       ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝
    
    Thanks for checking out GoJim! 💪
    Made with ❤️ for the fitness community
`);



