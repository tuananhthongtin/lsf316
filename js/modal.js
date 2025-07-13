// Modal Functions
function initializeModal() {
  const modal = document.getElementById("imageModal");
  const modalClose = document.querySelector(".modal-close");

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal && modal.style.display === "block") {
      closeModal();
    }
  });
}

// Gallery data for each category
const galleryData = {
  historical: [
    {
      title: {
        vi: "BỘ SƯU TẬP ẢNH",
        en: "Strategic Documents",
      },
      images: [
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      ],
      descriptions: {
        vi: "Vật chứng quan trọng của Sư đoàn 316 trong kháng chiến chống Pháp",
        en: "Important strategic documents of the 316th Division through different periods",
      },
    },
    {
      title: { vi: "BỘ SƯU TẬP ẢNH", en: "Battle Maps" },
      images: [
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      ],
      descriptions: {
        vi: "Vật chứng quan trọng của Sư đoàn 316 trong kháng chiến chống Mỹ",
        en: "Detailed maps and operational plans",
      },
    },
    {
      title: { vi: "BỘ SƯU TẬP ẢNH", en: "Field Reports" },
      images: [
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      ],
      descriptions: {
        vi: "Vật chứng quan trọng của Sư đoàn 316 trong giúp nước bạn Lào",
        en: "Real situation reports from the front lines",
      },
    },
  ],
  equipment: [
    {
      title: { vi: "BỘ SƯU TẬP ẢNH", en: "Infantry Weapons" },
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1541832676-9b763b8d3ab1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      ],
      descriptions: {
        vi: "Nơi thành lập các đơn vị trực thuộc Sư đoàn hiện nay",
        en: "Rifles and personal weapons of soldiers",
      },
    },
    {
      title: { vi: "BỘ SƯU TẬP ẢNH", en: "Album art" },
      images: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      ],
      descriptions: {
        vi: "Di tích lịch sử còn tồn tại hiện nay",
        en: "Artillery systems and heavy weapons",
      },
    },
    {
      title: {
        vi: "BỘ SƯU TẬP ẢNH",
        en: "Field Equipment",
      },
      images: [
        "https://images.unsplash.com/photo-1541832676-9b763b8d3ab1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      ],
      descriptions: {
        vi: "Tượng đài chiến thắng Sư đoàn 316",
        en: "Living and combat support equipment",
      },
    },
  ],
  battles: [
    {
      title: { vi: "BỘ SƯU TẬP ẢNH", en: "Dien Bien Phu" },
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1553729784-e91953dec042?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      ],
      descriptions: {
        vi: "Chỉ huy Sư đoàn 316 trong kháng chiến chống Pháp",
        en: "Historic victory at Dien Bien Phu in 1954",
      },
    },
    {
      title: { vi: "BỘ SƯU TẬP ẢNH", en: "Highland Battles" },
      images: [
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      ],
      descriptions: {
        vi: "Chỉ huy Sư đoàn 316 trong kháng chiến chống Mỹ",
        en: "Battles in highland regions",
      },
    },
    {
      title: { vi: "Chiến Dịch Giải Phóng", en: "Liberation Campaign" },
      images: [
        "https://images.unsplash.com/photo-1553729784-e91953dec042?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      ],
      descriptions: {
        vi: "Hành trình giải phóng miền Nam năm 1975",
        en: "Southern liberation journey in 1975",
      },
    },
  ],
  memorial: [
    {
      title: { vi: "Đài Tưởng Niệm", en: "War Memorials" },
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      ],
      descriptions: {
        vi: "Các đài tưởng niệm tôn vinh liệt sĩ",
        en: "Memorials honoring fallen soldiers",
      },
    },
    {
      title: { vi: "Gặp Mặt Cựu Chiến Binh", en: "Veterans Gathering" },
      images: [
        "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      ],
      descriptions: {
        vi: "Những buổi gặp mặt đầy xúc động",
        en: "Emotional reunion meetings",
      },
    },
    {
      title: { vi: "Lễ Tưởng Niệm", en: "Commemoration Ceremonies" },
      images: [
        "https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      ],
      descriptions: {
        vi: "Các buổi lễ tri ân hàng năm",
        en: "Annual tribute ceremonies",
      },
    },
  ],
};

function openGalleryModal(category, index) {
  const data = galleryData[category][index];
  if (!data) return;

  const currentLang = window.currentLanguage || "vi";

  // Create and show gallery modal
  let galleryModal = document.getElementById("galleryModal");
  if (!galleryModal) {
    createGalleryModal();
    galleryModal = document.getElementById("galleryModal");
  }

  const modalTitle = galleryModal.querySelector(".gallery-modal-title");
  const modalDescription = galleryModal.querySelector(
    ".gallery-modal-description"
  );
  const modalImages = galleryModal.querySelector(".gallery-modal-images");

  modalTitle.textContent = data.title[currentLang];
  modalDescription.textContent = data.descriptions[currentLang];

  // Clear and add images
  modalImages.innerHTML = "";
  data.images.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `${data.title[currentLang]} ${i + 1}`;
    img.onclick = () => openSingleImageModal(src, data.title[currentLang]);
    modalImages.appendChild(img);
  });

  galleryModal.style.display = "block";
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    galleryModal.style.opacity = "1";
  }, 10);
}

function createGalleryModal() {
  const modal = document.createElement("div");
  modal.id = "galleryModal";
  modal.className = "gallery-modal";
  modal.innerHTML = `
        <div class="gallery-modal-content">
            <span class="gallery-modal-close" onclick="closeGalleryModal()">&times;</span>
            <h3 class="gallery-modal-title"></h3>
            <p class="gallery-modal-description"></p>
            <div class="gallery-modal-images"></div>
        </div>
    `;

  document.body.appendChild(modal);

  // Close on background click
  modal.onclick = (e) => {
    if (e.target === modal) {
      closeGalleryModal();
    }
  };
}

function closeGalleryModal() {
  const modal = document.getElementById("galleryModal");
  if (modal) {
    modal.style.opacity = "0";
    setTimeout(() => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }, 300);
  }
}

function openSingleImageModal(src, title) {
  // Create single image modal for full view
  let singleModal = document.getElementById("singleImageModal");
  if (!singleModal) {
    singleModal = document.createElement("div");
    singleModal.id = "singleImageModal";
    singleModal.className = "single-image-modal";
    singleModal.innerHTML = `
            <div class="single-image-content">
                <span class="single-image-close" onclick="closeSingleImageModal()">&times;</span>
                <img id="singleModalImage" src="" alt="">
            </div>
        `;
    document.body.appendChild(singleModal);

    singleModal.onclick = (e) => {
      if (e.target === singleModal) {
        closeSingleImageModal();
      }
    };
  }

  const img = singleModal.querySelector("#singleModalImage");
  img.src = src;
  img.alt = title;

  singleModal.style.display = "block";
  setTimeout(() => {
    singleModal.style.opacity = "1";
  }, 10);
}

function closeSingleImageModal() {
  const modal = document.getElementById("singleImageModal");
  if (modal) {
    modal.style.opacity = "0";
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }
}

// Keep original openModal function for backward compatibility
function openModal(element) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");

  if (!modal || !modalImage || !modalTitle || !modalDescription) {
    return;
  }

  const img = element.querySelector("img");
  const overlay = element.querySelector(".gallery-overlay");

  if (!img || !overlay) {
    return;
  }

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
  const modal = document.getElementById("imageModal");

  if (modal) {
    modal.style.opacity = "0";
    setTimeout(() => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }, 300);
  }
}
