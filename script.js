document.addEventListener('DOMContentLoaded', () => {
    // Anno corrente nel footer
    const year = document.getElementById('year');
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Menu mobile
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            navToggle.classList.toggle('active', isOpen);
            navToggle.setAttribute('aria-expanded', String(isOpen));
            navToggle.setAttribute('aria-label', isOpen ? 'Chiudi il menu' : 'Apri il menu');
        });

        // Chiude il menu quando si naviga verso un'ancora interna
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Navbar compatta allo scroll
    const nav = document.querySelector('.nav');
    const onScroll = () => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Reveal-on-scroll con IntersectionObserver
    const reveals = document.querySelectorAll('.reveal');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        reveals.forEach(el => el.classList.add('active'));
    } else {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        reveals.forEach(el => observer.observe(el));
    }

    // Cover Nite: avvia l'animazione della slide embeddata solo quando entra in vista
    const niteFrame = document.querySelector('.cover--nite .cover__embed');
    if (niteFrame) {
        let inView = false;
        const play = () => {
            try { niteFrame.contentWindow.postMessage('nite:play', '*'); } catch (e) {}
        };
        // L'iframe segnala quando è pronto: se la cover è già in vista, parte subito
        window.addEventListener('message', e => {
            if (e.data === 'nite:ready' && inView) play();
        });
        const trigger = () => { inView = true; play(); };

        if (!('IntersectionObserver' in window)) {
            trigger();
        } else {
            const niteObserver = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        trigger();
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.4 });
            niteObserver.observe(niteFrame);
        }
    }
});
