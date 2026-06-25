document.addEventListener('DOMContentLoaded', function() {
    
    
    const tabButtons = document.querySelectorAll('.aba-icone');
    const tabContents = document.querySelectorAll('.conteudo-aba');

  
    if (tabButtons.length === 0) {
        console.warn("Aviso TechCiclo: Nenhum botão com a classe '.aba-icone' foi encontrado.");
        return;
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function(evento) {
           
            evento.preventDefault();

           
            const tabName = this.getAttribute('data-tab');
            
      
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
           
            tabContents.forEach(content => content.classList.remove('active'));

          
            this.classList.add('active');

          
            const secaoAlvo = document.getElementById(tabName);
            if (secaoAlvo) {
                secaoAlvo.classList.add('active');
            } else {
                console.error(`Erro TechCiclo: Não foi encontrada nenhuma aba central com o id="${tabName}"`);
            }
        });
    });

    // Sincronização inicial do "X" do saldo de pontos ao carregar a página
    const pontosIniciais = document.getElementById('pontos-cupons');
    const saldoPontosPerfil = document.getElementById('saldo-pontos');
    if (saldoPontosPerfil && pontosIniciais) {
        saldoPontosPerfil.textContent = pontosIniciais.textContent + ' pts';
    }
});

// Mantemos a função de resgate fora do DOMContentLoaded para que o "onclick" do HTML a encontre
function resgatarCupom(pontos, tipo) {
    const elementoPontosCupons = document.getElementById('pontos-cupons');
    const elementoSaldoPerfil = document.getElementById('saldo-pontos');
    const elementoResumoLateral = document.querySelector('.barra-lateral .sidebar-item:first-of-type .valor');

    if (!elementoPontosCupons) return;

    let saldoAtual = parseInt(elementoPontosCupons.textContent.replace(/[.,]/g, ''));

    if (saldoAtual >= pontos) {
        saldoAtual -= pontos;
        const saldoFormatado = saldoAtual.toLocaleString('en-US');

        elementoPontosCupons.textContent = saldoFormatado;
        if (elementoSaldoPerfil) elementoSaldoPerfil.textContent = saldoFormatado + ' pts';
        if (elementoResumoLateral) elementoResumoLateral.textContent = saldoFormatado;

        alert(`✓ Cupom de ${tipo} resgatado com sucesso!`);
    } else {
        alert('✗ Você não tem pontos suficientes.');
    }
}