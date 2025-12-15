document.querySelectorAll('nav#navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
                .scrollIntoView({ behavior: 'smooth' });
    });
});

// Form alert on submit
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Merci pour votre message !");
});


