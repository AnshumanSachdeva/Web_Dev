document.addEventListener("DOMContentLoaded", () => {
  const featureSection = document.querySelector(".features-section");
  const ctaButton = document.querySelector(".cta-button");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          featureSection.classList.add("animate-line");
          observer.unobserve(featureSection);
        }
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(featureSection);

  // get started
  ctaButton.addEventListener("click", () => {
    alert(
      "🚀 SmartClime Advisor — Development in Progress!\n\nThe upcoming features involve JavaScript and PHP functionality (like real-time weather logic, outfit suggestions, etc.).\n\nThis version focuses on HTML & CSS design — the rest will unlock soon. 🌤️"
    );
    
  });
});
