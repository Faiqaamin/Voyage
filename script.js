const testimonials = [
    { text: "Voyage made my Europe trip seamless! Highly recommend.", author: "- Azaan" },
    { text: "Best travel experience ever! Everything was perfectly organized.", author: "- Mehvish" },
    { text: "A truly unforgettable journey with Voyage. Will book again!", author: "- Hamid" },
    { text: "Excellent service and great packages! Loved my Bali trip.", author: "- Zainab" }
];

let index = 0;
const testimonialText = document.querySelector(".testimonial p");
const testimonialAuthor = document.querySelector(".testimonial h4");

function changeTestimonial() {
    // Fade out & slide-left effect on text only
    testimonialText.classList.add("fade-out");
    testimonialAuthor.classList.add("fade-out");

    setTimeout(() => {
        // Change text after fade-out
        index = (index + 1) % testimonials.length;
        testimonialText.textContent = testimonials[index].text;
        testimonialAuthor.textContent = testimonials[index].author;

        // Fade-in & slide-in effect on text only
        testimonialText.classList.remove("fade-out");
        testimonialText.classList.add("fade-in");
        testimonialAuthor.classList.remove("fade-out");
        testimonialAuthor.classList.add("fade-in");
    }, 500); // Wait for fade-out before changing text

    setTimeout(() => {
        testimonialText.classList.remove("fade-in");
        testimonialAuthor.classList.remove("fade-in");
    }, 1000); // Reset animation class
}

// Run every 2.5 seconds
setInterval(changeTestimonial, 2500);

// Navbar
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
    document.querySelector(".menu-toggle").classList.toggle("active");
}

// Close menu when clicking outside
document.addEventListener("click", function(event) {
    let menu = document.querySelector(".nav-links");
    let toggle = document.querySelector(".menu-toggle");

    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        menu.classList.remove("active");
        toggle.classList.remove("active");
    }
});

// Close menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function() {
        document.querySelector(".nav-links").classList.remove("active");
        document.querySelector(".menu-toggle").classList.remove("active");
    });
});
