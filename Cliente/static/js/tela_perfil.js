 // Sistema de Abas
        const tabButtons = document.querySelectorAll('.aba-icone');
        const tabContents = document.querySelectorAll('.conteudo-aba');

        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tabName = this.getAttribute('data-tab');

                // Remove a classe 'active' de todos os botões e conteúdos
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                // Adiciona 'active' ao botão clicado e seu conteúdo
                this.classList.add('active');
                document.getElementById(tabName).classList.add('active');
            });
        });

        // Função para resgatar cupom
        function resgatarCupom(pontos, tipo) {
            let saldoAtual = parseInt(document.getElementById('pontos-cupons').textContent);
            
            if (saldoAtual >= pontos) {
                saldoAtual -= pontos;
                document.getElementById('pontos-cupons').textContent = saldoAtual;
                document.getElementById('saldo-pontos').textContent = saldoAtual + ' pts';
                alert(`✓ Cupom de ${tipo} resgatado com sucesso!\nVocê recebeu um desconto e seus pontos foram deduzidos.`);
            } else {
                alert('✗ Você não tem pontos suficientes para resgatar este cupom.');
            }
        }

        // Atualizar contadores de pontos em tempo real (opcional)
        function atualizarPontos(novoSaldo) {
            document.getElementById('saldo-pontos').textContent = novoSaldo + ' pts';
            document.getElementById('pontos-cupons').textContent = novoSaldo;
        }