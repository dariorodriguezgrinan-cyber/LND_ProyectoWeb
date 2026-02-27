const btn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
btn.addEventListener("click", () => { menu.classList.toggle("show"); });
const historias = document.querySelectorAll(".historia-container");
const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible"); } }); }, { threshold: 0.25 });
historias.forEach(el => observer.observe(el));


const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let index = 0;
let interval;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[i].classList.add("active");
    dots[i].classList.add("active");
    index = i;
}

function autoSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

interval = setInterval(autoSlide, 5000);

// Click en indicadores
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        showSlide(i);
        clearInterval(interval);
        interval = setInterval(autoSlide, 5000);
    });
});

