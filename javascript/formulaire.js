emailjs.init("USHQIQCKwfEp0xWEn");

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateFormFields()) {
        // Continuez à envoyer le formulaire si tout est valide
        emailjs.sendForm('service_8a1sk8c', 'template_yed771m', this)
        .then(function() {
            alert('Message envoyé !');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Erreur lors de l\'envoi : ' + JSON.stringify(error));
        });
    }
});

function validateFormFields() {
    const regexNom = /^[a-z-_:?! ]+$/i;
    const regexPattern = /^[a-z0-9-_:?! ]+$/i;

    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const entreprise = document.getElementById('entreprise').value;
    const message = document.getElementById('message').value;

    let isValid = true;

    // Validation du nom
    if (!regexNom.test(nom) || nom.length < 3) {
        document.getElementById('nom-error').textContent = 'Le nom doit avoir au moins 3 lettres et ne peut contenir que des caractères autorisés.';
        isValid = false;
    } else {
        document.getElementById('nom-error').textContent = '';
    }

    // Validation de l'email
    if (!validateEmail(email) || email.length < 3) {
        document.getElementById('email-error').textContent = 'Entrez une adresse e-mail valide avec au moins 3 caractères.';
        isValid = false;
    } else {
        document.getElementById('email-error').textContent = '';
    }

    // Validation de l'entreprise
    if (!regexPattern.test(entreprise) || entreprise.length < 3) {
        document.getElementById('entreprise-error').textContent = 'Le nom de l\'entreprise doit avoir au moins 3 caractères.';
        isValid = false;
    } else {
        document.getElementById('entreprise-error').textContent = '';
    }

    // Validation du message
    if (message.length < 10) {
        document.getElementById('message-error').textContent = 'Votre message doit avoir au moins 10 caractères.';
        isValid = false;
    } else {
        document.getElementById('message-error').textContent = '';
    }

    return isValid;
}



function validateEmail(email) {
    const regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return regexEmail.test(email);
}
