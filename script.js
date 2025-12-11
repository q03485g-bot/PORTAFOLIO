// script.js - Interactividad del portafolio

document.addEventListener('DOMContentLoaded', function () {

    // -------- MENÚ CON SCROLL SUAVE --------
    const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // -------- ANIMACIÓN AL HACER SCROLL --------
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatables = document.querySelectorAll(
        '.proyecto-card, .habilidad, .seccion, .semana-card'
    );

    animatables.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // -------- EFECTO EN FOTO PRINCIPAL --------
    const fotoPrincipal = document.getElementById('fotoPrincipal');
    if (fotoPrincipal) {
        fotoPrincipal.style.transition = 'transform 0.25s ease';
        fotoPrincipal.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
        });
        fotoPrincipal.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    }

    // -------- PARPADEO SUAVE EN CONTACTO --------
    const contactInfo = document.querySelector('.info-contacto');
    if (contactInfo) {
        setInterval(() => {
            contactInfo.style.opacity =
                contactInfo.style.opacity === '0.8' ? '1' : '0.8';
        }, 2000);
    }

    // -------- VISTA PREVIA DE DOCUMENTOS (SEMANAS) --------
    const botonesVista = document.querySelectorAll('.btn-vista');
    const modalVista = document.getElementById('modalVista');
    const iframeDoc = document.getElementById('iframeDoc');
    const cerrarModal = document.getElementById('cerrarModal');

    botonesVista.forEach(boton => {
        boton.addEventListener('click', () => {
            const rutaDoc = boton.dataset.doc; // toma el valor de data-doc
            if (iframeDoc && modalVista) {
                iframeDoc.src = rutaDoc;
                modalVista.style.display = 'flex';
            }
        });
    });

    if (cerrarModal && modalVista && iframeDoc) {
        cerrarModal.addEventListener('click', () => {
            modalVista.style.display = 'none';
            iframeDoc.src = '';
        });

        // Cerrar haciendo clic fuera del cuadro
        modalVista.addEventListener('click', (e) => {
            if (e.target === modalVista) {
                modalVista.style.display = 'none';
                iframeDoc.src = '';
            }
        });
    }

    console.log('Portafolio de GAMBOA FERNANDEZ Richard Alejandro cargado.');
});
