document.addEventListener("DOMContentLoaded", () => {

    // 1. Controle do Campo de Solicitação de Troca
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

    // 2. Seleção de Produtos do Usuário para Oferecer na Troca
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

    // 3. Controle de Exibição da Caixa de Categoria/Estado (Dropdown)
    const btnEstado = document.getElementById("btnEstado");
    const categoria = document.getElementById("categoriaProduto");

    if (btnEstado && categoria) {
        btnEstado.addEventListener("click", function (e) {
            e.stopPropagation(); // Evita que o clique feche o menu imediatamente
            
            if (categoria.style.display === "block") {
                categoria.style.display = "none";
            } else {
                categoria.style.display = "block";
            }
        });

        // Fecha a caixinha se o usuário clicar em qualquer outro lugar da tela
        document.addEventListener("click", function () {
            categoria.style.display = "none";
        });
    }
});