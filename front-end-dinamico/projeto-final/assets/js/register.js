import { User } from "./classUser.js";

document.addEventListener('DOMContentLoaded', () => {
    const BUTTON_SUBMIT = document.querySelector('.button-submit-form');
    const form = document.getElementById('register-form');
    let userAlreadyRegistered = false;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const userName = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Verificar se o usuário já está cadastrado por email ou nome de usuário.
        const registeredUser = users.find(user => user.email === email || user.userName === userName);

        if (registeredUser) {
            alert('Usuário já cadastrado');
            userAlreadyRegistered = true;
        } else {
            // Se o usuário não existe, crie um novo usuário.
            users.push(new User(userName, email, password));
            localStorage.setItem('isLoggedIn', 'true');

            const usersJSON = JSON.stringify(users);

            localStorage.setItem('users', usersJSON);
        }
    });

    BUTTON_SUBMIT.addEventListener('click', () => {
        if (!userAlreadyRegistered) {
            window.location.href = 'index.html';
        }
    });
});
