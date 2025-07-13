// Event Handlers and Interactive Functions

// Button Event Handlers
function handleMemorialMessage() {
  alert(
    currentLanguage === "vi"
      ? "Cảm ơn bạn đã gửi lời tưởng niệm. Những lời tri ân này sẽ được lưu giữ để tôn vinh các anh hùng liệt sĩ."
      : "Thank you for sending your memorial message. These tributes will be preserved to honor the heroic martyrs."
  );
}

function handleBattleDetails(battleIndex) {
  // PDF files for each battle period
  const battlePDFs = [
    "documents/dbp.pdf", // Chiến Tranh Đông Dương
    "documents/tn.pdf", // Chiến Tranh Việt Nam
    "documents/hcm.pdf", // Chiến Dịch Cuối Cùng
  ];

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

  // Check if PDF exists and open it
  if (battleIndex >= 0 && battleIndex < battlePDFs.length) {
    const pdfUrl = battlePDFs[battleIndex];
    const battleTitle = battleTitles[currentLanguage][battleIndex];

    // Try to open PDF in new tab
    try {
      const newWindow = window.open(pdfUrl, "_blank");
      if (!newWindow) {
        // If popup blocked, create download link
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = `${battleTitle}.pdf`;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.warn("Could not open PDF:", error);
      // Fallback: show message with link
      const confirmMsg =
        currentLanguage === "vi"
          ? `Mở tài liệu PDF: ${battleTitle}?\n\nClick OK để tải xuống tài liệu.`
          : `Open PDF document: ${battleTitle}?\n\nClick OK to download the document.`;

      if (confirm(confirmMsg)) {
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = `${battleTitle}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  } else {
    const errorMsg =
      currentLanguage === "vi"
        ? "Không tìm thấy tài liệu cho trận đánh này."
        : "Document not found for this battle.";
    alert(errorMsg);
  }
}

// Initialize Event Listeners
function initializeEventListeners() {
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
}

// Accessibility enhancements
function initializeAccessibility() {
  document.addEventListener("keydown", function (e) {
    // Tab navigation enhancement
    if (e.key === "Tab") {
      document.body.classList.add("keyboard-navigation");
    }
  });

  document.addEventListener("mousedown", function () {
    document.body.classList.remove("keyboard-navigation");
  });
}

// Print functionality
function initializePrintHandlers() {
  window.addEventListener("beforeprint", function () {
    // Close mobile menu and modal before printing
    closeMobileMenu();
    closeModal();
  });
}
