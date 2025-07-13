// Language Management
let currentLanguage = "vi";

// Language data
const translations = {
  vi: {
    // Navigation
    "brand-text": "Sư Đoàn 316",

    // Hero Section
    "hero-title": "Sư Đoàn 316",
    "hero-subtitle": '"Bông Lau" - Anh Hùng Bất Tử',
    "hero-description":
      'Một trong sáu sư đoàn "Thép" đầu tiên của Quân đội Nhân dân Việt Nam<br>Được thành lập từ đồng bào dân tộc miền núi phía Bắc năm 1951',
    "explore-btn": "📖 Khám Phá Lịch Sử",
    "timeline-btn": "⏰ Dòng Thời Gian",

    // History Section
    "history-title": "Tổng Quan Lịch Sử",
    "history-desc":
      "Sư đoàn 316 được thành lập vào tháng 2-3/1951, là một trong những đơn vị anh hùng nhất trong lịch sử quân sự Việt Nam",
    "features-title": "Đặc Điểm Nổi Bật",
    "formation-title": "Thành Lập",
    "formation-desc":
      "Tháng 2-3/1951 từ đồng bào dân tộc miền núi phía Bắc giáp Lào",
    "strength-title": "Binh Lực",
    "strength-desc": "10,000-15,000 chiến sĩ trong thời kỳ đỉnh cao",
    "designation-title": "Danh Hiệu",
    "designation-desc": 'Một trong 6 sư đoàn "Thép" đầu tiên của QĐND Việt Nam',
    "recognition-title": "Vinh Danh",
    "recognition-desc": "Được tặng Huân chương Hồ Chí Minh năm 1985",
    "years-combat": "Năm Chiến Đấu",
    "year-established": "Năm Thành Lập",
    "southern-liberation": "Giải Phóng Miền Nam",
    "hcm-order": "Huân Chương HCM",

    // Timeline Section
    "timeline-title": "Dòng Thời Gian Lịch Sử",
    "timeline-desc":
      "Hành trình anh hùng của Sư đoàn 316 qua các thời kỳ quan trọng",
    "date-1951": "Tháng 2-3/1951",
    "formation-event": "Thành Lập Sư Đoàn",
    "formation-event-desc":
      "Sư đoàn 316 được thành lập từ đồng bào dân tộc miền núi phía Bắc, đặc biệt phù hợp với chiến thuật núi rừng.",
    "beginning-badge": "Khởi Đầu",
    "date-1951-april": "Tháng 4/1951",
    "mao-khe-battle": "Trận Mạo Khê",
    "mao-khe-desc":
      "Trận đánh đầu tiên của Sư đoàn 316, đánh dấu sự ra đời của một lực lượng chiến đấu mạnh mẽ.",
    "first-battle-badge": "Trận Đầu",
    "dien-bien-phu": "Điện Biên Phủ",
    "dien-bien-desc":
      "Vai trò quan trọng trong chiến thắng lịch sử. Trung đoàn 174 chiếm Eliane 4, Trung đoàn 98 chiếm Eliane 2. Thiệt hại: 1,250 liệt sĩ.",
    "historic-victory-badge": "Chiến Thắng Lịch Sử",
    "campaign-275": "Chiến Dịch 275",
    "campaign-275-desc":
      "Sư đoàn đầu tiên xâm nhập vào miền Nam sau Hiệp định Paris 1973. Dẫn đầu tấn công Ban Mê Thuột, góp phần quyết định sự sụp đổ của chính quyền Sài Gòn.",
    "reunification-badge": "Thống Nhất Đất Nước",

    // Battles Section
    "battles-title": "Các Trận Đánh Lịch Sử",
    "battles-desc":
      "Những chiến công oanh liệt của Sư đoàn 316 qua các thời kỳ",
    "indochina-war": "Chiến Tranh Đông Dương Lần Thứ Nhất",
    "mao-khe-item": "• Trận Mạo Khê (4/1951)",
    "lorraine-item": "• Chiến dịch Lorraine - Nghĩa Lộ (10/1952)",
    "laos-item": "• Chiến dịch Lào (4/1953)",
    "dien-bien-item": "• Điện Biên Phủ (1954)",
    "vietnam-war": "Chiến Tranh Việt Nam",
    "luang-namtha-item": "• Trận Luang Namtha (1962)",
    "nam-bac-item": "• Trận Nam Bac (1967-1968)",
    "campaign-139-item": "• Chiến dịch 139 - Cánh đồng Chum (1969)",
    "campaigns-74b-item": "• Chiến dịch 74B & Z (1971-1972)",
    "final-campaign": "Chiến Dịch Cuối Cùng",
    "campaign-275-item": "• Chiến dịch 275",
    "ban-me-thuot-item": "• Tấn công Ban Mê Thuột",
    "liberation-saigon-item": "• Giải phóng Sài Gòn",
    "reunification-item": "• Thống nhất đất nước",
    "details-btn-1": "Chi Tiết",
    "details-btn-2": "Chi Tiết",
    "details-btn-3": "Chi Tiết",

    // Gallery Section
    "gallery-title": "Thư Viện Hình Ảnh",
    "gallery-desc": "Những khoảnh khắc lịch sử qua ảnh tư liệu và di tích",
    "historical-docs": "Tài Liệu Lịch Sử",
    "historical-docs-desc": "Các văn kiện và bản đồ chiến thuật",
    "combat-equipment": "Trang Bị Chiến Đấu",
    "combat-equipment-desc": "Vũ khí và trang bị của sư đoàn",
    "memorial-monuments": "Đài Tưởng Niệm",
    "memorial-monuments-desc": "Các công trình tưởng niệm liệt sĩ",
    training: "Huấn Luyện",
    "training-desc": "Hoạt động đào tạo và huấn luyện",
    "battle-terrain": "Địa Hình Chiến Trường",
    "battle-terrain-desc": "Các khu vực hoạt động chính",
    "honor-ceremonies": "Vinh Danh",
    "honor-ceremonies-desc": "Các buổi lễ trao tặng huân chương",

    // Memorial Section
    "memorial-title": "Tưởng Niệm Anh Hùng",
    "memorial-desc":
      "Tưởng nhớ những chiến sĩ anh dũng của Sư đoàn 316 đã hy sinh vì độc lập, tự do của Tổ quốc",
    "memorial-words": "Lời Tưởng Niệm",
    "memorial-quote":
      '"Những anh hùng của Sư đoàn 316 đã hy sinh máu xương để bảo vệ độc lập, tự do của dân tộc. Tinh thần "Bông Lau" kiên cường, bất khuất sẽ mãi là nguồn cảm hứng cho các thế hệ mai sau."',
    "dien-bien-casualties": "Liệt sĩ tại Điện Biên Phủ:",
    soldiers: "người",
    "total-combat": "Tổng thời gian chiến đấu:",
    years: "năm",
    "ho-chi-minh-order": "Huân chương Hồ Chí Minh:",
    "send-memorial-btn": "❤️ Gửi Lời Tưởng Niệm",

    // Footer
    "footer-brand-text": 'Sư Đoàn 316 "Bông Lau"',
    "footer-description":
      "Trang web tưởng niệm và lưu giữ lịch sử anh hùng của Sư đoàn 316, một trong những đơn vị danh tiếng nhất của Quân đội Nhân dân Việt Nam.",
    "footer-links-title": "Liên Kết",
    "footer-history": "Lịch Sử",
    "footer-timeline": "Dòng Thời Gian",
    "footer-battles": "Trận Đánh",
    "footer-gallery": "Thư Viện",
    "footer-memorial": "Tưởng Niệm",
    "footer-resources-title": "Tài Nguyên",
    "historical-documents": "Tài Liệu Lịch Sử",
    "battlefield-maps": "Bản Đồ Chiến Trường",
    "archived-images": "Hình Ảnh Lưu Trữ",
    research: "Nghiên Cứu",
    "footer-copyright":
      '© 2024 Sư Đoàn 316 "Bông Lau" - Lịch Sử Anh Hùng. <span class="text-yellow">Tất cả quyền được bảo lưu.</span>',
    "footer-tribute":
      "Được thiết kế với lòng kính trọng và tưởng nhớ các anh hùng liệt sĩ",
  },
  en: {
    // Navigation
    "brand-text": "316th Division",

    // Hero Section
    "hero-title": "316th Division",
    "hero-subtitle": '"Silvergrass" - Immortal Heroes',
    "hero-description":
      'One of the six original "Steel and Iron Divisions" of the People\'s Army of Vietnam<br>Formed from ethnic minorities in the northern highlands in 1951',
    "explore-btn": "📖 Explore History",
    "timeline-btn": "⏰ Timeline",

    // History Section
    "history-title": "Historical Overview",
    "history-desc":
      "The 316th Division was established in February-March 1951, one of the most heroic units in Vietnamese military history",
    "features-title": "Key Features",
    "formation-title": "Formation",
    "formation-desc":
      "Feb-Mar 1951 from ethnic minorities in northern highlands bordering Laos",
    "strength-title": "Strength",
    "strength-desc": "10,000-15,000 personnel at peak strength",
    "designation-title": "Designation",
    "designation-desc": 'One of 6 original "Steel and Iron Divisions" of PAVN',
    "recognition-title": "Recognition",
    "recognition-desc": "Awarded the Order of Ho Chi Minh in 1985",
    "years-combat": "Years of Combat",
    "year-established": "Year Established",
    "southern-liberation": "Southern Liberation",
    "hcm-order": "Ho Chi Minh Order",

    // Timeline Section
    "timeline-title": "Historical Timeline",
    "timeline-desc":
      "The heroic journey of the 316th Division through important periods",
    "date-1951": "Feb-Mar 1951",
    "formation-event": "Division Formation",
    "formation-event-desc":
      "316th Division formed from ethnic minorities in the northern highlands, specially suited for mountain warfare tactics.",
    "beginning-badge": "Beginning",
    "date-1951-april": "April 1951",
    "mao-khe-battle": "Battle of Mạo Khê",
    "mao-khe-desc":
      "First battle of the 316th Division, marking the birth of a powerful fighting force.",
    "first-battle-badge": "First Battle",
    "dien-bien-phu": "Điện Biên Phủ",
    "dien-bien-desc":
      "Crucial role in the historic victory. Regiment 174 captured Eliane 4, Regiment 98 captured Eliane 2. Casualties: 1,250 killed.",
    "historic-victory-badge": "Historic Victory",
    "campaign-275": "Campaign 275",
    "campaign-275-desc":
      "First PAVN division to infiltrate South Vietnam after 1973 Paris Peace Accords. Led the attack on Ban Me Thuot, contributing to the decisive collapse of the Saigon government.",
    "reunification-badge": "National Reunification",

    // Battles Section
    "battles-title": "Historic Battles",
    "battles-desc":
      "The glorious military achievements of the 316th Division through different periods",
    "indochina-war": "First Indochina War",
    "mao-khe-item": "• Battle of Mạo Khê (4/1951)",
    "lorraine-item": "• Operation Lorraine - Nghia Lo (10/1952)",
    "laos-item": "• Laos Campaign (4/1953)",
    "dien-bien-item": "• Điện Biên Phủ (1954)",
    "vietnam-war": "Vietnam War",
    "luang-namtha-item": "• Battle of Luang Namtha (1962)",
    "nam-bac-item": "• Battle of Nam Bac (1967-1968)",
    "campaign-139-item": "• Campaign 139 - Plain of Jars (1969)",
    "campaigns-74b-item": "• Campaigns 74B & Z (1971-1972)",
    "final-campaign": "Final Campaign",
    "campaign-275-item": "• Campaign 275",
    "ban-me-thuot-item": "• Ban Me Thuot Offensive",
    "liberation-saigon-item": "• Liberation of Saigon",
    "reunification-item": "• National Reunification",
    "details-btn-1": "Details",
    "details-btn-2": "Details",
    "details-btn-3": "Details",

    // Gallery Section
    "gallery-title": "Image Gallery",
    "gallery-desc": "Historical moments through archival photos and monuments",
    "historical-docs": "Historical Documents",
    "historical-docs-desc": "Strategic documents and tactical maps",
    "combat-equipment": "Combat Equipment",
    "combat-equipment-desc": "Weapons and equipment of the division",
    "memorial-monuments": "Memorial Monuments",
    "memorial-monuments-desc": "Memorial works honoring fallen soldiers",
    training: "Training",
    "training-desc": "Training and drill activities",
    "battle-terrain": "Battle Terrain",
    "battle-terrain-desc": "Main operational areas",
    "honor-ceremonies": "Honor Ceremonies",
    "honor-ceremonies-desc": "Medal award ceremonies",

    // Memorial Section
    "memorial-title": "Memorial to Heroes",
    "memorial-desc":
      "Remembering the brave soldiers of the 316th Division who sacrificed for the independence and freedom of the Fatherland",
    "memorial-words": "Memorial Words",
    "memorial-quote":
      '"The heroes of the 316th Division sacrificed their blood to protect the independence and freedom of the nation. The resilient, indomitable spirit of "Silvergrass" will forever be an inspiration for future generations."',
    "dien-bien-casualties": "Casualties at Điện Biên Phủ:",
    soldiers: "soldiers",
    "total-combat": "Total combat duration:",
    years: "years",
    "ho-chi-minh-order": "Ho Chi Minh Order:",
    "send-memorial-btn": "❤️ Send Memorial Message",

    // Footer
    "footer-brand-text": '316th Division "Silvergrass"',
    "footer-description":
      "A memorial website preserving the heroic history of the 316th Division, one of the most prestigious units of the People's Army of Vietnam.",
    "footer-links-title": "Links",
    "footer-history": "History",
    "footer-timeline": "Timeline",
    "footer-battles": "Battles",
    "footer-gallery": "Gallery",
    "footer-memorial": "Memorial",
    "footer-resources-title": "Resources",
    "historical-documents": "Historical Documents",
    "battlefield-maps": "Battlefield Maps",
    "archived-images": "Archived Images",
    research: "Research",
    "footer-copyright":
      '© 2024 316th Division "Silvergrass" - Heroic History. <span class="text-yellow">All rights reserved.</span>',
    "footer-tribute":
      "Designed with respect and remembrance for the heroic martyrs",
  },
};

// Navigation data
const navItems = {
  vi: [
    { id: "home", label: "Trang Chủ" },
    { id: "history", label: "Lịch Sử" },
    { id: "timeline", label: "Dòng Thời Gian" },
    { id: "battles", label: "Trận Đánh" },
    { id: "gallery", label: "Thư Viện" },
    { id: "memorial", label: "Tưởng Niệm" },
  ],
  en: [
    { id: "home", label: "Home" },
    { id: "history", label: "History" },
    { id: "timeline", label: "Timeline" },
    { id: "battles", label: "Battles" },
    { id: "gallery", label: "Gallery" },
    { id: "memorial", label: "Memorial" },
  ],
};

// DOM Elements
const navbar = document.getElementById("navbar");
const navMenu = document.getElementById("nav-menu");
const mobileToggle = document.getElementById("mobile-toggle");
const langToggle = document.getElementById("lang-toggle");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalClose = document.querySelector(".modal-close");

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  initializeLanguage();
  initializeNavigation();
  initializeScrollEffects();
  initializeModal();
  initializeMobileMenu();
});

// Language Functions
function initializeLanguage() {
  const savedLang = localStorage.getItem("language") || "vi";
  currentLanguage = savedLang;
  updateLanguage(currentLanguage);
  updateLanguageButton();
}

function toggleLanguage() {
  currentLanguage = currentLanguage === "vi" ? "en" : "vi";
  localStorage.setItem("language", currentLanguage);
  updateLanguage(currentLanguage);
  updateLanguageButton();
  updateNavigation();
}

function updateLanguage(lang) {
  const elements = document.querySelectorAll("[data-vi][data-en]");
  elements.forEach((element) => {
    const text = element.getAttribute(`data-${lang}`);
    if (text) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = text;
      } else {
        element.innerHTML = text;
      }
    }
  });

  // Update document language
  document.documentElement.lang = lang;

  // Update page title
  document.title =
    lang === "vi"
      ? 'Sư Đoàn 316 "Bông Lau" - Lịch Sử Anh Hùng'
      : '316th Division "Silvergrass" - Heroic History';
}

function updateLanguageButton() {
  langToggle.textContent = currentLanguage === "vi" ? "EN" : "VI";
}

function updateNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const currentNavItems = navItems[currentLanguage];

  navLinks.forEach((link, index) => {
    if (currentNavItems[index]) {
      link.textContent = currentNavItems[index].label;
    }
  });
}

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
  langToggle.addEventListener("click", toggleLanguage);
}

function updateActiveNavigation() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
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
  mobileToggle.addEventListener("click", toggleMobileMenu);

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
      closeMobileMenu();
    }
  });
}

function toggleMobileMenu() {
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

function closeMobileMenu() {
  navMenu.classList.remove("active");
  mobileToggle.classList.remove("active");

  const spans = mobileToggle.querySelectorAll("span");
  spans[0].style.transform = "none";
  spans[1].style.opacity = "1";
  spans[2].style.transform = "none";
}

// Scroll Functions
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = navbar.offsetHeight;
    const targetPosition = element.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

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

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".timeline-item, .battle-card, .gallery-item, .stat-card, .feature-item"
  );

  animateElements.forEach((el) => {
    observer.observe(el);
  });
}

// Modal Functions
function initializeModal() {
  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  });
}

function openModal(element) {
  const img = element.querySelector("img");
  const overlay = element.querySelector(".gallery-overlay");
  const title = overlay.querySelector("h4").textContent;
  const description = overlay.querySelector("p").textContent;

  modalImage.src = img.src;
  modalImage.alt = img.alt;
  modalTitle.textContent = title;
  modalDescription.textContent = description;

  modal.style.display = "block";
  document.body.style.overflow = "hidden";

  // Animate modal appearance
  setTimeout(() => {
    modal.style.opacity = "1";
  }, 10);
}

function closeModal() {
  modal.style.opacity = "0";
  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }, 300);
}

// Button Event Handlers
function handleMemorialMessage() {
  alert(
    currentLanguage === "vi"
      ? "Cảm ơn bạn đã gửi lời tưởng niệm. Những lời tri ân này sẽ được lưu giữ để tôn vinh các anh hùng liệt sĩ."
      : "Thank you for sending your memorial message. These tributes will be preserved to honor the heroic martyrs."
  );
}

function handleBattleDetails(battleIndex) {
  const battleTitles = {
    vi: [
      "Chiến Tranh Đông Dương Lần Thứ Nhất (1951-1954)",
      "Chiến Tranh Việt Nam (1960s-1970s)",
      "Chiến Dịch Cuối Cùng (1975)",
    ],
    en: [
      "First Indochina War (1951-1954)",
      "Vietnam War (1960s-1970s)",
      "Final Campaign (1975)",
    ],
  };

  const battleDescriptions = {
    vi: [
      "Giai đoạn đầu tiên trong lịch sử chiến đấu của Sư đoàn 316, bao gồm các trận đánh quan trọng như Mạo Khê, Nghĩa Lộ, và đặc biệt là Điện Biên Phủ.",
      "Thời kỳ hoạt động chủ yếu tại Lào, hỗ trợ lực lượng Pathet Lao trong các chiến dịch quan trọng trên Cánh đồng Chum.",
      "Chiến dịch cuối cùng dẫn đến thống nhất đất nước, với vai trò tiên phong trong việc tấn công Ban Mê Thuột và giải phóng miền Nam.",
    ],
    en: [
      "The first period in the combat history of the 316th Division, including important battles such as Mạo Khê, Nghia Lo, and especially Điện Biên Phủ.",
      "Period of operations mainly in Laos, supporting Pathet Lao forces in important campaigns on the Plain of Jars.",
      "The final campaign leading to national reunification, with a pioneering role in attacking Ban Me Thuot and liberating the South.",
    ],
  };

  alert(
    `${battleTitles[currentLanguage][battleIndex]}\n\n${battleDescriptions[currentLanguage][battleIndex]}`
  );
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Memorial button
  const memorialBtn = document.getElementById("send-memorial-btn");
  if (memorialBtn) {
    memorialBtn.addEventListener("click", handleMemorialMessage);
  }

  // Battle detail buttons
  const detailButtons = document.querySelectorAll('[id^="details-btn-"]');
  detailButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => handleBattleDetails(index));
  });

  // Smooth scroll for hero buttons
  const exploreBtn = document.getElementById("explore-btn");
  const timelineBtn = document.getElementById("timeline-btn");

  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => scrollToSection("history"));
  }

  if (timelineBtn) {
    timelineBtn.addEventListener("click", () => scrollToSection("timeline"));
  }
});

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
window.addEventListener("scroll", debouncedScrollHandler);

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

// Initialize preloading
preloadImages();

// Add loading state management
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

// Accessibility enhancements
document.addEventListener("keydown", function (e) {
  // Tab navigation enhancement
  if (e.key === "Tab") {
    document.body.classList.add("keyboard-navigation");
  }
});

document.addEventListener("mousedown", function () {
  document.body.classList.remove("keyboard-navigation");
});

// Print functionality
window.addEventListener("beforeprint", function () {
  // Close mobile menu and modal before printing
  closeMobileMenu();
  closeModal();
});

// Export functions for global access
window.scrollToSection = scrollToSection;
window.openModal = openModal;
window.closeModal = closeModal;
