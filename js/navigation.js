// Navigation Functions
function initializeNavigation() {
  updateNavigation();

  // Add scroll listener for active navigation
  window.addEventListener("scroll", updateActiveNavigation);

  // Add click listeners to navigation links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("href").substring(1);
      scrollToSection(target);
      closeMobileMenu();
    });
  });

  // Language toggle
  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", toggleLanguage);
  }
}

function updateActiveNavigation() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbar = document.getElementById("navbar");
  const scrollPosition = window.scrollY + 100;

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });

  // Update navbar background on scroll
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(44, 62, 80, 0.95)";
    navbar.style.backdropFilter = "blur(10px)";
  } else {
    navbar.style.background = "var(--military-navy)";
    navbar.style.backdropFilter = "none";
  }
}

// Mobile Menu Functions
function initializeMobileMenu() {
  const mobileToggle = document.getElementById("mobile-toggle");
  if (mobileToggle) {
    mobileToggle.addEventListener("click", toggleMobileMenu);
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    const navMenu = document.getElementById("nav-menu");
    const mobileToggle = document.getElementById("mobile-toggle");

    if (
      navMenu &&
      mobileToggle &&
      !navMenu.contains(e.target) &&
      !mobileToggle.contains(e.target)
    ) {
      closeMobileMenu();
    }
  });
}

function toggleMobileMenu() {
  const navMenu = document.getElementById("nav-menu");
  const mobileToggle = document.getElementById("mobile-toggle");

  if (navMenu && mobileToggle) {
    navMenu.classList.toggle("active");
    mobileToggle.classList.toggle("active");

    // Animate hamburger menu
    const spans = mobileToggle.querySelectorAll("span");
    if (navMenu.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(6px, 6px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(6px, -6px)";
    } else {
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }
  }
}

function closeMobileMenu() {
  const navMenu = document.getElementById("nav-menu");
  const mobileToggle = document.getElementById("mobile-toggle");

  if (navMenu && mobileToggle) {
    navMenu.classList.remove("active");
    mobileToggle.classList.remove("active");

    const spans = mobileToggle.querySelectorAll("span");
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  }
}

// Scroll Functions
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  const navbar = document.getElementById("navbar");

  if (element && navbar) {
    const navbarHeight = navbar.offsetHeight;
    const targetPosition = element.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Performance optimization
const debouncedScrollHandler = debounce(updateActiveNavigation, 10);
