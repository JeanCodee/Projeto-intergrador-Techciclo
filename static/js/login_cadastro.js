let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let container = document.getElementById("container");

//altereação entre login e cadastro
signUp.addEventListener("click", () => {
    container.classList.add("right-panel-active");
})

signIn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

//exibição de senha
document.querySelectorAll(".toggle-password").forEach(icon => {
    icon.addEventListener("click", () => {
        let input = document.getElementById(icon.dataset.target);
        let isPassword = input.type === "password";
        input.type = isPassword ? "text" : "password";
        icon.classList.toggle("fa-eye");
        icon.classList.toggle("fa-eye-slash");
    });
});

// Js para mobile

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const linkIrparaCadastro = document.getElementById('mobileSignUp');
    const linkIrparaLogin = document.getElementById('mobileSignIn');

    if (linkIrparaCadastro) {
        linkIrparaCadastro.addEventListener('click', (e) => {
            e.preventDefault();
            container.classList.add('right-panel-active');
        })
    }

    if (linkIrparaLogin) {
        linkIrparaLogin.addEventListener('click', (e) => {
            e.preventDefault();
            container.classList.remove('right-panel-active')
        })
    }
});

//animação das mensagens de erro e sucesso

const alertas = document.querySelectorAll('.django-messages .alert');
    
    alertas.forEach(alerta => {
        
        const removerAlerta = () => {
            alerta.classList.add('sumindo');
            setTimeout(() => {
                alerta.remove();
            }, 500);
        };
        setTimeout(removerAlerta, 3000);
    });