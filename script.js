// On récupère tous les liens du menu
const menuLinks = document.querySelectorAll("#navbar a");

// On récupère le nom de la page actuelle (ex: index.html)
const pageActuelle = window.location.pathname.split("/").pop();

// Pour chaque lien du menu
menuLinks.forEach(link => {

    // Si le lien correspond à la page actuelle
    if (link.getAttribute("href") === pageActuelle) {
        link.classList.add("active");
    }

});
// On récupère toutes les sections
const sections = document.querySelectorAll(".section");

// Pour chaque section
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";

    // Petite animation après le chargement
    setTimeout(() => {
        section.style.transition = "all 0.8s ease";
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
    }, 200);
});

// On récupère le formulaire (s'il existe sur la page)
const form = document.querySelector("form");

// Si le formulaire existe
if (form) {

    form.addEventListener("submit", function(event) {

        // Empêche le rechargement de la page
        event.preventDefault();

        // Message de confirmation
        alert("Merci pour votre message !");

        // Vide les champs du formulaire
        form.reset();
    });

}



