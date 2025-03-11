document.addEventListener('DOMContentLoaded', function () {
    // Menu mobile
    const mobileMenu = document.querySelector('.mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', function () {
            navList.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    document.querySelector('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            mobileMenu.classList.remove('active');
        })
    })

    if (localStorage.getItem('mode') === 'register') {
        loginBox.classList.add('hidden');
        registerBox.classList.remove('hidden');
    }

    showRegister.addEventListener('click', () => {
        localStorage.setItem('mode', 'register');
    });

    showLogin.addEventListener('click', () => {
        localStorage.setItem('mode', 'login');
    });

    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Alternância entre login e registro
    const loginBox = document.querySelector('.login-box');
    const registerBox = document.querySelector('.register-box');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');

    if (showRegister && showLogin && loginBox && registerBox) {
        showRegister.addEventListener('click', function (event) {
            event.preventDefault();
            loginBox.classList.add('hidden');
            registerBox.classList.remove('hidden');
        });

        showLogin.addEventListener('click', function (event) {
            event.preventDefault();
            registerBox.classList.add('hidden');
            loginBox.classList.remove('hidden');
        });
    }

    // Validação de confirmação de senha no formulário de registro
    const registerForm = document.getElementById('register-form');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const passwordError = document.getElementById('password-error');

    if (registerForm && passwordInput && confirmPasswordInput && passwordError) {
        registerForm.addEventListener('submit', function (event) {
            if (passwordInput.value !== confirmPasswordInput.value) {
                event.preventDefault(); // Impede o envio do formulário
                passwordError.classList.remove('hidden');
            } else {
                passwordError.classList.add('hidden');
            }
        });
    }
});
