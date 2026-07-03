document.addEventListener("DOMContentLoaded", () => {

    const imagemPrincipal = document.getElementById("imagemPrincipal");
    const miniaturas = document.querySelectorAll(".carrossel-item img");

    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");

    let indiceAtual = 0;

    function mostrarImagem(indice) {
        imagemPrincipal.src = miniaturas[indice].src;

        document.querySelectorAll(".carrossel-item").forEach(item => {
            item.classList.remove("ativo");
        });

        miniaturas[indice].parentElement.classList.add("ativo");

        indiceAtual = indice;
    }

    miniaturas.forEach((imagem, indice) => {
        imagem.addEventListener("click", () => {
            mostrarImagem(indice);
        });
    });
    if (btnNext) {
        btnNext.addEventListener("click", () => {
            indiceAtual++;

            if (indiceAtual >= miniaturas.length) {
                indiceAtual = 0;
            }

            mostrarImagem(indiceAtual);
        });
    }

    if (btnPrev) {
        btnPrev.addEventListener("click", () => {
            indiceAtual--;

            if (indiceAtual < 0) {
                indiceAtual = miniaturas.length - 1;
            }

            mostrarImagem(indiceAtual);
        });
    }

    const btnTroca = document.querySelector(".btn-trocar");
    const campoSolicitacao = document.getElementById("campoSolicitacao");

    if (btnTroca && campoSolicitacao) {

        btnTroca.addEventListener("click", () => {

            campoSolicitacao.classList.toggle("ativo");

            if (campoSolicitacao.classList.contains("ativo")) {
                btnTroca.textContent = "Cancelar solicitação";
            } else {
                btnTroca.textContent = "Solicitar troca";
            }

        });

    }

    const botoesSelecionar = document.querySelectorAll(".btn-selecionar");

    botoesSelecionar.forEach(botao => {

        botao.addEventListener("click", () => {

            botoesSelecionar.forEach(btn => {
                btn.textContent = "Selecionar";
                btn.classList.remove("selecionado");
            });

            botao.textContent = "Selecionado ✓";
            botao.classList.add("selecionado");

            const idProduto = botao.dataset.produtoId;

            console.log("Produto selecionado:", idProduto);

        });

    });

});