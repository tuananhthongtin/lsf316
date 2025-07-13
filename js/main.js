// Main Application Initialization
document.addEventListener("DOMContentLoaded", function () {
  initializeLanguage();
  initializeNavigation();
  initializeScrollEffects();
  initializeModal();
  initializeHeroModal();
  initializeMobileMenu();
  initializeEventListeners();
  initializeAccessibility();
  initializePrintHandlers();
  initializeLoadingStates();
});

// Performance optimization
window.addEventListener("scroll", debouncedScrollHandler);

// Export functions for global access
window.scrollToSection = scrollToSection;
window.openModal = openModal;
window.closeModal = closeModal;
window.openHeroModal = openHeroModal;
window.closeHeroModal = closeHeroModal;
