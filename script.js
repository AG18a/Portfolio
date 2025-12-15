const menuLinks = document.querySelectorAll("#navbar a");
const pageActuelle = window.location.pathname.split("/").pop();
menuLinks.forEach(link => {

    if (link.getAttribute("href") === pageActuelle) {
        link.classList.add("active");
    }

});
const sections = document.querySelectorAll(".section");

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";

    setTimeout(() => {
        section.style.transition = "all 0.8s ease";
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
    }, 200);
});

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Merci pour votre message !");

        form.reset();
    });

}




