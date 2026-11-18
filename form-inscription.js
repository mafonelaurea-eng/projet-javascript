const formulaire = document.getElementById("form");
const boutonSubmit = document.getElementById("btnSubmit");
const nameForm = document.getElementById("name");
const mailForm = document.getElementById("mail");
const password1Form = document.getElementById("password1");
const password2Form = document.getElementById("password2");
const termsForm = document.getElementById("terms");
const messageSucces = document.getElementById("message");
function readError(input, message) {
    const error = document.getElementById(`error-${input.id}`);
    error.textContent = message;
    error.classList.remove("hidden");
    if (input.type !== 'checkbox') {
        input.classList.add("border-red-500");
        input.classList.remove("focus:border-orange-500");
        input.classList.remove("focus:ring-orange-500");
    }
}
function clearError(input) {
    const error = document.getElementById(`error-${input.id}`);
    error.textContent = "";
    error.classList.add("hidden");
    if (input.type !== 'checkbox') {
        input.classList.remove("border-red-500");
        input.classList.add("focus:border-orange-500");
        input.classList.add("focus:ring-orange-500");
    }
}
function validNom() {
    if (nameForm.value.trim() == '') {
        readError(nameForm, "Ce champ est obligatoire. ");
        return false;
    } else {
        clearError(nameForm);
        return true;
    }
}

function validEmail() {
    const valeur = mailForm.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (valeur === '') {
        readError(mailForm, 'L’adresse e-mail est obligatoire.');
        return false;
    }


    if (!emailRegex.test(valeur)) {
        readError(mailForm, 'Le format de l’adresse e-mail est invalide.');
        return false;
    }

    clearError(mailForm);
    return true;
}

function validPassword() {
    let longueurPassword = 8;
    if (password1Form.value.length < longueurPassword) {
        readError(password1Form, "le mot de passe doit contenir au moins 8 caractere");
        return false;
    } else {
        clearError(password1Form);
        return true;
    }
}
function validConfirmPassword() {
    if (password2Form.value.trim() === '') {
        readError(password2Form, "Veuillez confirmer votre mot de passe");
        return false;
    } else if (password1Form.value !== password2Form.value) {
        readError(password2Form, "Les deux mots de passe ne correspondent pas");
        return false;
    } else {
        clearError(password2Form);
        return true;
    }
}

function validTerms() {
    if (!termsForm.checked) {
        readError(termsForm, "Vous devez accepter les conditions d'utilisation");
        return false;
    } else {
        clearError(termsForm);
        return true;
    }
}

nameForm.addEventListener('input', validNom);
mailForm.addEventListener('input', validEmail);
password2Form.addEventListener('input', validConfirmPassword);

password1Form.addEventListener('input', function () {
    validPassword();
    if (password2Form.value.trim() !== '') {
        validConfirmPassword();
    }
});
termsForm.addEventListener('change', validTerms);

formulaire.addEventListener("submit", function (event) {
    event.preventDefault();
    const isNomValid = validNom();
    const isEmailValid = validEmail();
    const isPasswordValid = validPassword();
    const isConfirmValid = validConfirmPassword();
    const isTermsValid = validTerms();
    if (isNomValid && isEmailValid && isPasswordValid && isConfirmValid && isTermsValid) {
        messageSucces.classList.remove('hidden');
        formulaire.reset();
    }

});