// Scroll Effects and Animations
function initializeScrollEffects() {
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, observerOptions);

  // Observe timeline items for animation
  const animateElements = document.querySelectorAll(
    ".timeline-item, .battle-card, .gallery-item, .stat-card, .feature-item"
  );

  animateElements.forEach((el) => {
    observer.observe(el);
  });
}

// Preload critical images
function preloadImages() {
  const criticalImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  ];

  criticalImages.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });
}
// Add loading state management
function initializeLoadingStates() {
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });

  // Error handling for images
  document.addEventListener(
    "error",
    function (e) {
      if (e.target.tagName === "IMG") {
        e.target.style.display = "none";
        console.warn("Failed to load image:", e.target.src);
      }
    },
    true
  );
}

// Initialize preloading
preloadImages();
