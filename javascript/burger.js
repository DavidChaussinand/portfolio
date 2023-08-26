var burgerButton = document.querySelector('.burger');
var navLinks = document.querySelector('.nav-links');

burgerButton.addEventListener('click', function() {
    if (navLinks.style.display === 'none' || navLinks.style.display === '') {
        navLinks.style.display = 'flex';
        burgerButton.style.display = 'none'; // Cache le bouton burger
    }
});

// Ajoutez une fonction pour cacher le menu et réafficher le bouton burger lorsque le menu est cliqué
navLinks.addEventListener('click', function() {
    navLinks.style.display = 'none';
    burgerButton.style.display = 'block'; // Réaffiche le bouton burger
});
