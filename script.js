// script.js - INTERACTIVIDAD PARA TU PÁGINA

document.addEventListener('DOMContentLoaded', function() {
    
    // EFECTO SMOOTH SCROLL PARA EL MENÚ
    const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // ANIMACIÓN DE APARICIÓN AL SCROLL
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // OBSERVAR TODAS LAS CARDS Y SECCIONES
    const animatables = document.querySelectorAll('.proyecto-card, .habilidad, .seccion');
    animatables.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // EFECTO PARPADEO DEL CURSOR EN CONTACTO
    const contactInfo = document.querySelector('.info-contacto');
    if (contactInfo) {
        setInterval(() => {
            contactInfo.style.opacity = contactInfo.style.opacity === '0.7' ? '1' : '0.7';
        }, 2000);
    }

    // CAMBIO DE FOTO AL PASAR MOUSE (OPCIONAL)
    const fotoPrincipal = document.getElementById('fotoPrincipal');
    if (fotoPrincipal) {
        fotoPrincipal.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(5deg)';
        });
        fotoPrincipal.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    console.log('🎉 Página de GAMBOA FERNANDEZ Richard Alejandro cargada correctamente!');
});
