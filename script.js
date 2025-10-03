document.addEventListener("DOMContentLoaded", () => {

    const navlinks = document.getElementById("nav-links");
    const menuToggle = document.getElementById("menu-toggle");
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    // Smooth scroll for navbar links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if(target){
                target.scrollIntoView({ behavior: "smooth" });
            }

            // Close menu after clicking (mobile)
            navlinks.classList.remove("active");
        });
    });

    // Contact form validation
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            formMessage.style.color = "red";
            formMessage.textContent = "Please fill in all fields!";
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formMessage.style.color = "red";
            formMessage.textContent = "Please enter a valid email!";
            return;
        }

        formMessage.style.color = "green";
        formMessage.textContent = "Message sent successfully! (Demo)";

        // Clear form
        form.reset();
    });

    // Toggle navbar menu on mobile
    menuToggle.addEventListener("click", () => {
        navlinks.classList.toggle("active");
    });

});
