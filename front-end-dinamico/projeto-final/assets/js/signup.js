document.addEventListener('DOMContentLoaded',  () => {
    const BUTTON_SUBMIT = document.querySelector('.button-submit-form');
    const loginForm = document.getElementById('login-form');
            
    loginForm.addEventListener('submit', verifyAccount)

    function verifyAccount (event) {
        
        event.preventDefault();

        console.log('funcionou')
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = "file:///C:/Users/Lu%C3%ADs%20Gabriel/Projects/adaTech/primeiro-codigo/front-end-dinamico/projeto-final/index.html?"; 
        } else {
            if (users.every(user => user.email !== email)) {
                console.log('funcionou')
                window.location.href = "signup.html"; 
            } else {
                alert("Login failed. Please check your email and password.");
            }
        }
    }

    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn !== 'true') {
        window.location.href = "signup.html"; 
    }

});

