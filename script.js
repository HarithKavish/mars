document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add hover effects for mission cards
    const missionCards = document.querySelectorAll('.mission-card');
    const factCards = document.querySelectorAll('.fact-card');

    missionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('img')?.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', function() {
            this.querySelector('img')?.style.transform = 'scale(1)';
        });
    });

    factCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add animation for hero section
    const heroSection = document.querySelector('.hero');
    const heroText = document.querySelector('.hero-text');

    // Animate text on scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroHeight = heroSection.offsetHeight;

        if (scrolled > heroHeight - 100) {
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }
    });

    // Initialize animations
    heroText.style.opacity = '0';
    heroText.style.transform = 'translateY(20px)';
    heroText.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});