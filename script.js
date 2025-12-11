/* ------------------------------------------------------- */
/* EXPANSIÓN DE TARJETAS                                   */
/* ------------------------------------------------------- */

const tarjetas = document.querySelectorAll(".tarjeta-semana");

tarjetas.forEach(t => {
    t.addEventListener("click", () => {
        t.classList.toggle("activa");
    });
});


/* ------------------------------------------------------- */
/* MODAL DE VISTA PREVIA                                   */
/* ------------------------------------------------------- */

const modal = document.getElementById("modalVista");
const iframe = document.getElementById("iframeDoc");
const cerrar = document.getElementById("cerrarModal");

function abrirDocumento(url) {
    iframe.src = url;
    modal.classList.add("activo");
}

cerrar.addEventListener("click", () => {
    modal.classList.remove("activo");
    iframe.src = "";
});

/* Cerrar clic afuera */
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("activo");
        iframe.src = "";
    }
});
