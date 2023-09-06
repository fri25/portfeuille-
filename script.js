// Fonction pour basculer entre le thème clair et sombre
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-theme');
    const body = document.body;
    
    toggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});
