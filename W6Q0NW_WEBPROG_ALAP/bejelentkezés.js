
    const form = document.getElementById('urlap');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        bemenetEllenorzes();
    });

    function bemenetEllenorzes() {
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        if(usernameValue === '') {
            beallitHiba(username, 'A felhasználónév nem lehet üres!');
        } else {
            beallitSiker(username);
        }

        if(emailValue === '') {
            beallitHiba(email, 'Az email mező nem lehet üres!');
        } else if (!emailValidacio(emailValue)) {
            beallitHiba(email, 'Érvénytelen email formátum!');
        } else {
            beallitSiker(email);
        }

        if(passwordValue === '') {
            beallitHiba(password, 'A jelszó nem lehet üres!');
        } else {
            beallitSiker(password);
        }
    }

    function beallitHiba(input, uzenet) {
        const formCsoport = input.parentElement; 
        const small = formCsoport.querySelector('small');
        
        small.innerText = uzenet;
        
        formCsoport.className = 'form-csoport hiba';
    }

    function beallitSiker(input) {
        const formCsoport = input.parentElement;
        formCsoport.className = 'form-csoport siker';
    }

    function emailValidacio(email) {
        return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    }
