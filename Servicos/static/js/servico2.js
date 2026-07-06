document.addEventListener("DOMContentLoaded", () => {

    const btnSolicitar = document.getElementById("btnSolicitarServico");
    const statusSolicitacao = document.getElementById("statusSolicitacao");
    const btnAceita = document.getElementById("btnAceita");
    const btnNegada = document.getElementById("btnNegada");

    btnSolicitar.addEventListener("click", () => {

        btnSolicitar.textContent = "✔ Solicitação enviada";
        btnSolicitar.style.backgroundColor = "#28a745";
        btnSolicitar.style.color = "#fff";
        btnSolicitar.disabled = true;

        statusSolicitacao.style.display = "flex";

    });

});