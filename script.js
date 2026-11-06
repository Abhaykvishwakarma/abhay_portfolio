document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const roles = ["Python & Backend", "AI / Machine Learning", "Data Science"];
const typed = document.getElementById("typed");
let roleIndex = 0;
let charIndex = roles[0].length;
let deleting = true;

function typeEffect() {
  const current = roles[roleIndex];
  typed.textContent = current.substring(0, charIndex);

  if (deleting) {
    charIndex--;
    if (charIndex < 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      charIndex = 0;
    }
  } else {
    charIndex++;
    if (charIndex > roles[roleIndex].length) {
      deleting = true;
      setTimeout(typeEffect, 1300);
      return;
    }
  }
  setTimeout(typeEffect, deleting ? 45 : 75);
}
setTimeout(typeEffect, 1500);
