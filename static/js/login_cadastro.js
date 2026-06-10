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

// Cadastro
document.getElementById('formCadastro').addEventListener('submit', (event) => {
    event.preventDefault();
    let userData = {
        nome: document.getElementById("cadName").value,
        email: document.getElementById("cadEmail").value,
        senha: document.getElementById("cadPassword").value
    };
    localStorage.setItem('user_login', JSON.stringify(userData));

    console.log("Usuário Cadastrado", userData);
    alert("conta criada! Já pode realizar o login.");
    container.classList.remove("right-panel-active");
});

//login
document.getElementById('formLogin').addEventListener('submit', (event) => {
    event.preventDefault();
    let emailDigitado = document.getElementById('loginEmail').value;
    let senhaDigitada = document.getElementById('loginPassword').value;

    let rawData = localStorage.getItem('user_login');

    if (rawData) {
        let user = JSON.parse(rawData);

        if (emailDigitado === user.email && senhaDigitada === user.senha) {

            alert(`Bem-vindo de volta, ${user.nome || 'Usuário'}!`);
            
        } else {
            alert('E-mail ou senha incorretos!');
        }
    } else {
        alert('Nenhum usuário cadastrado encontrado!');
    }
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