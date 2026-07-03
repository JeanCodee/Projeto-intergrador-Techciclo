document.addEventListener("DOMContentLoaded", () => {

    const campoPesquisa = document.getElementById("campoPesquisa");

    if (campoPesquisa) {

        campoPesquisa.addEventListener("keyup", () => {

            const texto = campoPesquisa.value.toLowerCase();

            const linhas = document.querySelectorAll("tbody tr");

            linhas.forEach(linha => {

                const conteudo = linha.textContent.toLowerCase();

                linha.style.display = conteudo.includes(texto)
                    ? ""
                    : "none";

            });

        });

    }

    const botoesEditar = document.querySelectorAll(".btn-editar");

    botoesEditar.forEach(botao => {

        botao.addEventListener("click", function () {

            const linha = this.closest("tr");

            const nome = linha.cells[0].textContent;

            alert(`Editar registro: ${nome}`);

        });

    });

    const botoesExcluir = document.querySelectorAll(".btn-excluir");

    botoesExcluir.forEach(botao => {

        botao.addEventListener("click", function () {

            const linha = this.closest("tr");

            const nome = linha.cells[0].textContent;

            const confirmar = confirm(
                `Deseja excluir "${nome}"?`
            );

            if (confirmar) {

                linha.remove();

                mostrarToast("Registro removido com sucesso!");

            }

        });

    });

    function mostrarToast(texto){

        const toast = document.createElement("div");

        toast.className = "toast";

        toast.innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            ${texto}
        `;

        document.body.appendChild(toast);

        setTimeout(()=>{

            toast.classList.add("mostrar");

        },100);

        setTimeout(()=>{

            toast.classList.remove("mostrar");

            setTimeout(()=>{

                toast.remove();

            },500);

        },3000);

    }



    const cards = document.querySelectorAll(".card-info");

    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-8px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0px)";

        });

    });

    

    const linhas = document.querySelectorAll("tbody tr");

    linhas.forEach(linha=>{

        linha.addEventListener("mouseenter",()=>{

            linha.style.background="#f2f8f2";

        });

        linha.addEventListener("mouseleave",()=>{

            linha.style.background="";

        });

    });


    function animarCard(card){

        const numero = card.querySelector("h2");

        if(!numero) return;

        const valorFinal = parseInt(numero.textContent);

        if(isNaN(valorFinal)) return;

        let valor = 0;

        const incremento = Math.ceil(valorFinal/60);

        const intervalo = setInterval(()=>{

            valor += incremento;

            if(valor >= valorFinal){

                valor = valorFinal;

                clearInterval(intervalo);

            }

            numero.textContent = valor;

        },20);

    }

    cards.forEach(animarCard);

});