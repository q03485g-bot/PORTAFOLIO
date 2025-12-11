// === MODAL ===
const modal = document.getElementById("modalVista");
const modalContenido = document.getElementById("modalContenido");
const cerrarBtn = document.getElementById("cerrarModal");
const botonesVista = document.querySelectorAll(".btn-vista");

botonesVista.forEach(btn => {
  btn.addEventListener("click", () => {
    const archivo = btn.getAttribute("data-doc");
    modalContenido.innerHTML = `<embed src="${archivo}" type="application/pdf" width="100%" height="100%">`;
    modal.style.display = "flex";
  });
});

cerrarBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalContenido.innerHTML = "";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalContenido.innerHTML = "";
  }
});

// === SCROLL SUAVE ===
document.querySelectorAll('a[href^="#"]').forEach(ancla => {
  ancla.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// === ANIMACIÓN AL SCROLLEAR ===
const elementos = document.querySelectorAll('.seccion, .semana-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

elementos.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  observer.observe(el);
});

// === EFECTO PARPADEO SUAVE EN BOTONES ===
const botones = document.querySelectorAll('.btn-vista, .btn-descarga');

setInterval(() => {
  botones.forEach(btn => {
    btn.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.05)' },
      { transform: 'scale(1)' }
    ], {
      duration: 1500,
      easing: 'ease-in-out'
    });
  });
}, 3000);
