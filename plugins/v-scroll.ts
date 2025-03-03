import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("scroll", {
    mounted(el, binding) {
      const { delay = 0 } = binding.value || {};

      // Set initial hidden styles
      el.style.opacity = "0";
      el.style.transform = "translateY(100px)";
      el.style.transition = `opacity 0.4s ease ${delay}ms, transform 0.4s ease ${delay}ms`;

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, delay);
            observer.unobserve(el); // Stop observing after animation triggers
          }
        });
      }, { threshold: 0 });

      observer.observe(el);
    },
  });
});
