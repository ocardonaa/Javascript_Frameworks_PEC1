const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const age = document.getElementById('age');

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

function checkLenght(input, min, max) {
    if(input.value.length < min || input.value === '') {
        showError(input, `${getFieldName(input)} must be at least ${min} characters long`);
    }
    else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be at less than ${max} characters long`);
    }
    else {
        showSuccess(input);
    }
}

function checkCorrectPassword(input) {
    const regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[ `~!@#$%^&*()_+\-={}|[\]\\:";'<>?,./]).{8,}$/;
    if(regexPassword.test(input.value.trim())) {
        showSuccess(input);
    }
    else {
        showError(input, `${getFieldName(input)} is invalid`);
    }
}

function checkPasswordsMatch(password1, password2) {
    if(password1.value !== password2.value || password1.value === '') {
        showError(password2, 'Passwords do not match');
    }
    else {
        showSuccess(password1);
    }
}

function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        }
        else {
            showSuccess(input);
        }
    });
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkAge(input) {
    if(input.value !== '') {
        const convertedAge = Number(input.value);
        if(!isNaN(convertedAge) && input.value !== '') {
            if(convertedAge > 999) {
                showError(input, `${getFieldName(input)} cannot be greater than 1000 years`);
            }
            else if (convertedAge < 0) {
                showError(input, `${getFieldName(input)} cannot be lower than 0 years`);
            }
            else {
                showSuccess(input);
            }
        }
        else {
            showError(input, `${getFieldName(input)} must be a number`);
    
        }
    }
    else {
        showError(input, `${getFieldName(input)} is required`);
    }
    
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password2]);
    checkLenght(username, 3, 15);
    checkCorrectPassword(password);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
    checkAge(age);
});
