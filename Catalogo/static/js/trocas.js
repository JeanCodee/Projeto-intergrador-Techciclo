document.addEventListener("DOMContentLoaded", function () {
    const filtroForm = document.querySelector(".filtro-opcoes-avancadas");

    if (filtroForm) {
        const posicaoSalva = localStorage.getItem("posicaoScrollFiltro");
        if (posicaoSalva) {
            window.scrollTo(0, parseInt(posicaoSalva, 10));
            localStorage.removeItem("posicaoScrollFiltro");
        }

        filtroForm.querySelectorAll("select").forEach(select => {
            select.addEventListener("change", function () {
                localStorage.setItem("posicaoScrollFiltro", window.scrollY);
            });
        });
    }
});