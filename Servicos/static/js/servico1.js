document.addEventListener("DOMContentLoaded", () => {

    const btnSolicitar = document.querySelector(".btn-solicitar");

    if (btnSolicitar) {
        btnSolicitar.addEventListener("click", () => {

            alert("Sua solicitação de serviço foi enviada com sucesso!");

            btnSolicitar.disabled = true;
            btnSolicitar.textContent = "Solicitação enviada";
            btnSolicitar.style.backgroundColor = "#28a745";
            btnSolicitar.style.cursor = "default";
        });
    }

    const cardInfo = document.querySelector(".card-info");

    if (cardInfo) {
        cardInfo.style.opacity = "0";
        cardInfo.style.transform = "translateY(30px)";

        setTimeout(() => {
            cardInfo.style.transition = "all 0.8s ease";
            cardInfo.style.opacity = "1";
            cardInfo.style.transform = "translateY(0)";
        }, 100);
    }

    const cardChat = document.querySelector(".card-chat");

    if (cardChat) {

        cardChat.addEventListener("mouseenter", () => {
            cardChat.style.transition = "0.3s";
            cardChat.style.transform = "scale(1.03)";
            cardChat.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
        });

        cardChat.addEventListener("mouseleave", () => {
            cardChat.style.transform = "scale(1)";
            cardChat.style.boxShadow = "none";
        });

    }

});