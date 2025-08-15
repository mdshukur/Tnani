 document.addEventListener('DOMContentLoaded', function () {
            const navbar = document.getElementById('navbar');
            const navCollapse = document.getElementById('navbarNav');
            const navLinks = navCollapse.querySelectorAll('.nav-link');
            const bsCollapse = new bootstrap.Collapse(navCollapse, { toggle: false });

            // Add shadow to navbar on scroll
            window.addEventListener('scroll', function () {
                if (window.scrollY > 50) {
                    navbar.classList.add('navbar-scrolled');
                } else {
                    navbar.classList.remove('navbar-scrolled');
                }
            });

            // Handle nav link clicks
            navLinks.forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    // Remove active class from all links
                    navLinks.forEach(link => link.classList.remove('active'));

                    // Add active class to the clicked link for immediate feedback
                    this.classList.add('active');

                    // Scroll to the target section
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });

                    // Close mobile navbar if open
                    if (navCollapse.classList.contains('show')) {
                        bsCollapse.hide();
                    }
                });
            });

            // Scroll to top button
            const scrollToTopBtn = document.getElementById("scrollToTopBtn");
            window.onscroll = function () {
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                    scrollToTopBtn.style.display = "block";
                } else {
                    scrollToTopBtn.style.display = "none";
                }
            };

            scrollToTopBtn.addEventListener('click', function () {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });