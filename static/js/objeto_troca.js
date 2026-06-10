document.addEventListener("DOMContentLoaded", () => {
    let botaoTroca = document.getElementById("botao-solicitar-troca");
    let nomeObjeto = document.querySelector(".objeto-descricao h2").innerText;

    botaoTroca.addEventListener("click", () => {
        botaoTroca.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
        botaoTroca.classList.add('loading');

        setTimeout(() => {
            mostrarNotificacao(`Solicitação de troca para "${nomeObjeto}" enviada com sucesso!`);
            botaoTroca.innerHTML = 'Troca solicitada';
            botaoTroca.style.backgroundColor = 'var(--botao-troca-active-color)';
         }, 1500);
        });
    });
    function mostrarNotificacao(mensagem) {
        let notificacao = document.querySelector(".notificacao");
        if (!notificacao) {
            notificacao = document.createElement("div");
            notificacao.classList.add("notificacao");
            document.body.appendChild(notificacao);
        }

        notificacao.innerText = mensagem;
        notificacao.style.display = "block";

        setTimeout(() => {
            notificacao.style.display = "none";
        }, 4000);
    }

    const fotoUsuario = document.querySelector('.foto-usuario');
    fotoUsuario.addEventListener('mouseenter', () => {
        fotoUsuario.style.transform = 'scale(1.1) rotate(5deg)';
        fotoUsuario.style.transition = '0.3s';
    });
    
    fotoUsuario.addEventListener('mouseleave', () => {
        fotoUsuario.style.transform = 'scale(1) rotate(0deg)';
    });