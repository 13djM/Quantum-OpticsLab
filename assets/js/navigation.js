document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            const isExpanded = navMenu.classList.contains('open');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            menuToggle.innerHTML = isExpanded ? '✕' : '☰';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.innerHTML = '☰';
            }
        });

        // Hide Navbar on Scroll (Mobile Only)
        let lastScrollTop = 0;
        const navbar = document.querySelector('.navbar');
        const headerHeight = navbar.offsetHeight;

        window.addEventListener('scroll', () => {
            if (window.innerWidth <= 768) { // Only on mobile
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                // Don't hide if menu is open
                if (navMenu.classList.contains('open')) return;

                if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
                    // Scrolling DOWN
                    navbar.classList.add('navbar--hidden');
                } else {
                    // Scrolling UP
                    navbar.classList.remove('navbar--hidden');
                }
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
            } else {
                // Ensure navbar is visible on desktop resize
                navbar.classList.remove('navbar--hidden');
            }
        }, { passive: true });
    }
});
