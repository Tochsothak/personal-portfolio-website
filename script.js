// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Form validation
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        e.preventDefault();
    }
});

// Animation
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if ((sectionTop = section.innerHeight - 100)) {
            section.classList.add("visible");
        }
    });
});

//dark Mode
const toggleBtn = document.getElementById("dark-mode-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});