const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(input) {
    const isEmail = /^.+@.+$/;
    if(isEmail.test(input.value.trim())) {
        showSuccess(input);
    }
    else {
        showError(input, `${getFieldName(input)} format is not valid`);
    }
}

function checkPasswordsMatch(password1, password2) {
    if(password1.value !== password2.value) {
        showError(password2, 'Passwords do not match');
    }
    else {
        showSuccess(input);
    }
}

function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        }
        else {
            showSuccess(input);
        }
    });
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLenght(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters long`)
    }
    else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be at less than ${max} characters long`)
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLenght(username, 3, 15);
    checkLenght(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
});
