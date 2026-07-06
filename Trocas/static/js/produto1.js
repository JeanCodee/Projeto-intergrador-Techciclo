document.addEventListener("DOMContentLoaded", () => {

    const imagemPrincipal = document.getElementById("imagemPrincipal");
    const miniaturas = document.querySelectorAll(".carrosel-item img");

    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");

    let indiceAtual = 0;

    function mostrarImagem(indice) {

        if (indice < 0) indice = miniaturas.length - 1;
        if (indice >= miniaturas.length) indice = 0;

        imagemPrincipal.src = miniaturas[indice].src;

        document.querySelectorAll(".carrosel-item").forEach(item => {
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

    btnNext.addEventListener("click", () => {
        mostrarImagem(indiceAtual + 1);
    });

    btnPrev.addEventListener("click", () => {
        mostrarImagem(indiceAtual - 1);
    });

    // Teclado
    document.addEventListener("keydown", (e) => {

        if (e.key === "ArrowRight") {
            mostrarImagem(indiceAtual + 1);
        }

        if (e.key === "ArrowLeft") {
            mostrarImagem(indiceAtual - 1);
        }

    });

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

            console.log("Produto escolhido:", idProduto);

            alert("Produto selecionado para a troca!");

        });

    });

    const cards = document.querySelectorAll(".img-produto-cds");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px) scale(1.03)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });
});   

    const btnEstado = document.getElementById("btnEstado");
    const categoria = document.getElementById("categoriaProduto");

    btnEstado.addEventListener("click", function (e) {
        e.stopPropagation();
        
        if(categoria.style.display === "block") {
            categoria.style.display = "none";

        } else{
            categoria.style.display = "block";
        }
    });

    document.addEventListener("click",function () {
        categoria.style.display = "none";
    } );