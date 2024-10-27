'use srict';

// <    >   =>
    
    window.addEventListener('DOMContentLoaded', () => {

        const mainForm = document.getElementById('main-form');
        const btnOpen = document.getElementById('open');
        const btnCloset = document.getElementById('closet');

        const form = document.getElementById('form');
        const user = document.getElementById('user');
        const userError = document.getElementById('userError');
        const password = document.getElementById('password');
        const passwordError = document.getElementById('passwordError');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const errorInputs = () => {
                user.style.border = '1px solid red';
                password.style.border = '1px solid red';
            };

            function isValidUser(user) {
                const userRegex =  /^[a-zA-Z0-9\s.,!?'"()&$%]+$/;
                return userRegex.test(user);
            }

            function isValidPassword(password) {
                const passwordRegex = /^[a-zA-Z0-9\s.,!?'"()&$%]+$/;
                return passwordRegex.test(password);
            }

            if(!user.value.trim() === '') {
                userError.textContent = 'Enter and user';
                errorInputs();
            } else if(!isValidUser(user.value.trim())) {
                userError.textContent = 'Invalid User';
                errorInputs();
            } else {
                userError.textContent = '';
            };

            if(!password.value.trim() === '') {
                passwordError.textContent = 'Enter and user';
                errorInputs();
            } else if(!isValidPassword(password.value.trim())) {
                passwordError.textContent = 'Invalid Password';
                errorInputs();
            } else {
                passwordError.textContent = '';
            };

            const resetError = () => {
                user.style.border = '';
                userError.style.border = '';
                password.style.border = '';
                passwordError.style.border = '';
            };

            user.addEventListener('change', resetError);
            password.addEventListener('change', resetError);
        });

        btnOpen.addEventListener('click', () => {
            mainForm.style.display = 'flex';
        });

        btnCloset.addEventListener('click', () => {
            mainForm.classList.add('fade-out');
            setTimeout(() => {
                mainForm.style.display = 'none'; 
                mainForm.classList.remove('fade-out');
            }, 300);
        });

    // Animaciones avanzadas

    const sr = ScrollReveal({
    duration: 2000,
    distance: '150px',
    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    reset: false, 
    opacity: 0, 
    viewFactor: 0.3, 
    });

    document.body.style.perspective = '1000px';

    sr.reveal('header', {
        origin: 'top',
        distance: '200px',
        delay: 200,
        scale: 0.9,
        rotate: { x: -20, y: 0, z: 0 }, 
        opacity: 0,
    });

    sr.reveal('.description-coffee', {
        origin: 'left',
        distance: '250px',
        delay: 300,
        scale: 1.05,
        rotate: { x: 0, y: -20, z: 10 },
        opacity: 0,
    });

    sr.reveal('.image figure', {
        origin: 'right',
        distance: '200px',
        delay: 400,
        scale: 1.1,
        rotate: { x: 0, y: 20, z: -10 },
        opacity: 0,
    });

    sr.reveal('.container-price', {
        origin: 'bottom',
        distance: '150px',
        delay: 500,
        scale: 1.05,
        rotate: { x: -10, y: 0, z: 0 },
    });

    sr.reveal('.networks box-icon', {
        delay: 600,
        distance: '50px',
        interval: 200,
        scale: 0.9,
        rotate: { x: 0, y: 0, z: 20 }, 
        opacity: 0,
    });

    sr.reveal('.author', {
        origin: 'bottom',
        distance: '50px',
        delay: 700,
        scale: 1,
        rotate: { x: -5, y: 0, z: 0 },
        opacity: 0.8,
    });


});