// Heroes data with detailed information
const heroesData = {
  vi: [
    {
      id: 0,
      name: "La Văn Cầu",
      rank: "AHLLVTND",
      title: "Anh hùng giết giặc trong kháng chiến chống Pháp",
      image:
        "https://file3.qdnd.vn/data/images/0/2024/08/30/upload_2058/24.jpg?dpi=150&quality=100&w=870",
      biography:
        "Anh Hùng La Văn Cầu là một trong những vị chỉ huy xuất sắc của Sư đoàn 316 trong giai đoạn cuối của cuộc kháng chiến chống Pháp. Sinh năm 1935 tại Nghệ An, ông gia nhập quân đội từ năm 1954 và trải qua nhiều vị trí chỉ huy quan trọng.",
      achievements: [
        "Tham gia đấu 29 trận lớn nhỏ trong cuộc kháng chiến chống Pháp",
        "Xung phong và một mình bắn chết lính Pháp trên xe tăng rồi nhảy lên xe  dùng súng trên xe diệt thêm 10 lính Pháp nữa",
        "La Văn Cầu là chỉ huy tổ bộc phá hàng rào. Ông Cầu bị trúng đạn dập nát một phần cánh tay phải, chịu đau để nhờ đồng đội dùng lưỡi lê chặt đứt cánh tay bị thương và tiếp tục chiến đấu. Ông dùng tay trái ôm bọc phá đánh mở đường, tạo thời cơ cho các lực lượng khác tiếp đánh quân đối phương",
        "Anh hùng lực lượng vũ trang Nhân dân - 1952",
        "Anh hùng thi đua ái quốc - 1952",
        "Huân chương Quân công, hạng nhì, hạng ba và Huân chương Kháng chiến hạng nhất (1985)",
      ],
      battles: [
        "Chiến dịch Điện Biên Phủ",
        "Trận Đông Khê (1952)",
        "Trận Bông Lau - Vũng Phầy (1948-1952)",
      ],
      legacy:
        "Cuộc đời của La Văn Cầu từng được đưa vào bài tập đọc của sách giáo khoa tiểu học ở Việt Nam. Tên ông được dùng để đặt cho nhiều trường học và một số con đường ở Thủ đô Hà Nội, ở phường Thắng Tam, thành phố Vũng Tàu, một con phố ở thành phố Nam Định và một khu phố ở thị trấn Nam Sách, huyện Nam Sách, tỉnh Hải Dương. Ông là một trường hợp đặc biệt và hiếm có ở Việt Nam lẫn trên thế giới vì ngay khi còn đang sống đã được đặt tên đường.",
    },
    {
      id: 1,
      name: "Bế Văn Đàn",
      rank: "AHLLVTND",
      title: "Anh hùng lực lượng vũ trang nhân dân - Chiến sĩ pháo binh",
      image:
        "https://84865018f0.vws.vegacdn.vn/uploadimages/thbevandan/nh%202017-2018/v%E1%BB%81%20bv%C4%91/b%E1%BA%BF_v%C4%83n_%C4%91%C3%A0n.jpg",
      biography:
        "Trung đoàn 174 là một trong những đơn vị tinh nhuệ của Sư đoàn 316, được thành lập từ những chiến sĩ dân tộc miền núi phía Bắc. Đơn vị này nổi tiếng với khả năng chiến đấu trong địa hình núi rừng phức tạp.",
      achievements: [
        "Chiếm thành công Eliane 4 trong trận Điện Biên Phủ",
        "Tiên phong trong các cuộc tấn công đồi cứ điểm",
        "Duy trì sự đoàn kết và tinh thần chiến đấu cao",
        "Được tặng thưởng Huân chương Chiến công hạng Nhất",
        "Nhận danh hiệu Đơn vị Anh hùng Lực lượng vũ trang nhân dân",
      ],
      battles: [
        "Trận Điện Biên Phủ - Tấn công Eliane 4 (1954)",
        "Chiến dịch Lorraine - Nghĩa Lộ (1952)",
        "Trận Mạo Khê (1951)",
        "Các trận đánh ở vùng biên giới Việt-Lào",
      ],
      legacy:
        "Trung đoàn 174 để lại di sản về lòng dũng cảm và sự hy sinh trong các trận đánh quyết định. Tinh thần đoàn kết của các chiến sĩ dân tộc thiểu số đã trở thành biểu tượng của sự đoàn kết dân tộc trong kháng chiến.",
    },
    {
      id: 2,
      name: "Chỉ Huy Trung Đoàn 98",
      rank: "Trung Tá",
      title: "Trung Đoàn Trưởng - Đột Phá Eliane 2",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      biography:
        "Trung đoàn 98 là đơn vị có truyền thống chiến đấu anh dũng, đặc biệt nổi tiếng trong việc tấn công các vị trí cứ điểm kiên cố của địch. Các chiến sĩ trung đoàn được đào tạo chuyên sâu về chiến thuật tấn công đồi núi.",
      achievements: [
        "Chiếm thành công Eliane 2 trong ngày cuối cùng của Điện Biên Phủ",
        "Đột phá thành công hệ thống phòng thủ kiên cố của Pháp",
        "Góp phần quyết định vào chiến thắng lịch sử",
        "Được tặng thưởng Huân chương Chiến công hạng Nhất",
        "Nhận Cờ thi đua của Chính phủ",
      ],
      battles: [
        "Trận Điện Biên Phủ - Tấn công Eliane 2 (Tháng 5/1954)",
        "Các trận đánh ở Tây Bắc (1952-1954)",
        "Chiến dịch biên giới (1950-1951)",
        "Tham gia giải phóng các thành phố ở miền Bắc",
      ],
      legacy:
        "Trung đoàn 98 được ghi nhận là một trong những đơn vị có vai trò then chốt trong việc kết thúc trận Điện Biên Phủ. Chiến thắng ở Eliane 2 đã mở đường cho sự sụp đổ hoàn toàn của pháo đài Điện Biên Phủ.",
    },
    {
      id: 3,
      name: "Lý Văn Mưu",
      rank: "AHLLVTND",
      title: "Chiến đấu dũng cảm trong kháng chiến chống Pháp",
      image: "https://nguoinoitieng.tv/images/nnt/94/0/back.jpg",
      biography:
        "Anh hùng Lý Văn Mưu sinh năm 1934, dân tộc Tày, quê ở xã Độc Lập, huyện Quảng Uyên, tỉnh Cao Bằng. Khi hy sinh, anh là chiến sĩ bộ binh, đại đội 675, tiểu đoàn 252, trung đoàn 174, Sư đoàn 316.",
      achievements: [
        "Mới 13 tuổi, Lý Văn Mưu đã tham gia công tác ở địa phương.",
        "Năm 16 tuổi anh xung phong vào bộ đội.",
        "Trận đánh Đông Khê lần thứ nhất (2-1950), Lý Văn Mưu đã phá tung hàng rào, mở cửa mở, rồi cùng anh em đánh vào trung tâm, diệt thêm ụ súng địch.",
        "Trận đánh Đông Khê lần thứ hai (10-1950), khi thê đội 1 bị địch phản kích ác liệt không dứt điểm được, Lý Văn Mưu cùng thê đội 2 vào chiến đấu, bị thương vào tay, anh vẫn không rời trận địa. Khi có lệnh rút, Lý Văn Mưu đã đưa được 20 thương binh, tử sĩ ra ngoài. Sau ngày đêm chuẩn bị, quân ta lại tiếp tục mở đợt tiến công mới. Đại đội Lý Văn Mưu nhận nhiệm vụ chủ công. Anh dẫn đầu một tiểu đội xung kích diệt hết ụ súng này đến ụ súng khác, hết bộc phá, dùng lựu đạn, tiểu liên diệt địch. Địch chống cự quyết liệt đơn vị bị thương vong nhiều, nhưng vẫn chưa giải quyết xong trận đánh. Còn một lô cốt và hầm ngầm địch cố thủ. Người thứ nhất, thứ hai rồi thứ ba lên đánh bộc phá đều bị thương vong. Lý Văn Mưu xung phong lên đánh, vừa rời khỏi công sự anh đã bị hỏa lực địch bắn ngăn chặn ác liệt. Lý Văn Mưu ôm bộc phá trước bụng vừa chạy vừa giật nụ xòe, địch bắn anh bị thương vào tay, vào chân rồi vào ngực, máu tràn đẫm áo, Lý Văn Mưu cố gượng trườn lên đưa bộc phá vào lỗ châu mai, giật nụ xòe bộc phá nổ làm nổ tiếp những quả bộc phá của anh em bị hy sinh và bị thương để lại. Lý Văn Mưu đã hy sinh anh dũng. Cứ điểm Đông Khê bị diệt, mở đầu chiến dịch giải phóng vùng Biên Giới.",
        "Huân chương Quân công hạng nhì và danh hiệu Anh hùng lực lượng vũ trang nhân dân (07/5/1956).",
      ],
      battles: [
        "CTrận đánh Đông Khê lần thứ nhất (2-1950)",
        "Trận đánh Đông Khê lần thứ hai (10-1950)",
      ],
      legacy:
        "Anh hùng Lý Văn Mưu với tinh thần chiến đấu không lùi bước, quả cảm, quyết tâm tiêu diệt quân thù của Anh là tấm gương sáng cho cán bộ, chiến sĩ ngày nay noi theo",
    },
    {
      id: 4,
      name: "Lê Văn Dỵ",
      rank: "AHLLVTND",
      title: "Anh Hùng Lực Lượng Vũ Trang - Đại Đội Trưởng",
      image:
        "https://file3.qdnd.vn/data/images/0/2024/04/02/upload_2121/02-01.jpg?dpi=150&quality=100&w=870",
      biography:
        "Trung Sĩ Nguyễn Văn Trung sinh năm 1930 tại Thái Nguyên, gia nhập quân đội năm 1949. Ông là một trong những chiến sĩ tiêu biểu của thế hệ đầu tiên của Sư đoàn 316, được đồng đội yêu mến vì lòng dũng cảm và tinh thần trách nhiệm cao.",
      achievements: [
        "Nhận danh hiệu Anh hùng Lực lượng vũ trang nhân dân năm 1954",
        "Dẫn đầu đại đội trong nhiều trận đánh quan trọng",
        "Cứu sống nhiều đồng đội bị thương trong chiến đấu",
        "Được tặng thưởng Huân chương Chiến công hạng Ba",
        "Nhận Huy hiệu 'Tuổi trẻ dũng cảm'",
      ],
      battles: [
        "Trận Mạo Khê - Đại đội trưởng tuyến đầu (1951)",
        "Chiến dịch Nghĩa Lộ (1952)",
        "Trận Điện Biên Phủ - Tham gia tấn công các đồi cứ điểm",
        "Các trận đánh nhỏ ở vùng Tây Bắc",
      ],
      legacy:
        "Trung Sĩ Nguyễn Văn Trung là tấm gương sáng về lòng yêu nước và tinh thần hy sinh của thế hệ chiến sĩ trẻ. Cuộc đời và sự nghiệp của ông đã truyền cảm hứng cho nhiều thế hệ quân nhân sau này.",
    },
    {
      id: 5,
      name: "Triệu Văn Báo",
      rank: "AHLLVTND",
      title: "Phó Đại đội trưởng thông tin - Sư đoàn 316",
      image: "https://nguoinoitieng.tv/images/thumbnail/94/bahn.jpg",
      biography:
        "Đại Tá Lê Văn Đức sinh năm 1920 tại Hà Tĩnh, là một trong những cán bộ chính trị đầu tiên của Sư đoàn 316. Ông có vai trò quan trọng trong việc xây dựng tinh thần chiến đấu và đoàn kết nội bộ của sư đoàn.",
      achievements: [
        "Xây dựng hệ thống giáo dục chính trị vững mạnh trong sư đoàn",
        "Tăng cường đoàn kết giữa các dân tộc trong đơn vị",
        "Tổ chức thành công các hoạt động tuyên truyền và động viên",
        "Được tặng thưởng Huân chương Độc lập hạng Nhì",
        "Nhận danh hiệu Đảng viên ưu tú",
      ],
      battles: [
        "Tham gia mọi chiến dịch lớn của Sư đoàn 316",
        "Công tác chính trị trong trận Điện Biên Phủ",
        "Tuyên truyền và động viên trong Chiến dịch Mùa xuân 1975",
        "Giáo dục chính trị cho tân binh",
      ],
      legacy:
        "Đại Tá Lê Văn Đức để lại di sản về việc xây dựng đời sống tinh thần cho bộ đội. Phương pháp giáo dục chính trị của ông đã trở thành mô hình điển hình được học tập trong toàn quân.",
    },
  ],
  en: [
    {
      id: 0,
      name: "Dam Van Nguy",
      rank: "Senior Colonel",
      title: "Division Commander - 1975 Spring Offensive",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      biography:
        "Senior Colonel Dam Van Nguy was one of the outstanding commanders of the 316th Division during the final phase of the resistance against the Americans. Born in 1935 in Nghe An, he joined the army in 1954 and held many important command positions.",
      achievements: [
        "Commanded the 316th Division during the 1975 Spring Offensive",
        "Led the attack on Ban Me Thuot as part of Campaign 275",
        "Played a decisive role in the victory of liberating South Vietnam",
        "Awarded the Second-Class Military Merit Order",
        "Received the 30-year Party membership badge",
      ],
      battles: [
        "Campaign 275 - Attack on Ban Me Thuot (March 1975)",
        "Advance to liberate Saigon (April 1975)",
        "Various campaigns in the Central Highlands (1974-1975)",
        "Final campaign on Route 14",
      ],
      legacy:
        "Senior Colonel Dam Van Nguy is recognized as one of the commanders who played an important role in ending the resistance and unifying the country. After the war, he continued to contribute to building the army during peacetime.",
    },
    {
      id: 1,
      name: "Regiment 174 Commander",
      rank: "Lieutenant Colonel",
      title: "Regiment Commander - Dien Bien Phu Victory",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      biography:
        "Regiment 174 was one of the elite units of the 316th Division, formed from ethnic minority soldiers from the northern mountains. This unit was famous for its ability to fight in complex mountain and forest terrain.",
      achievements: [
        "Successfully captured Eliane 4 during the Battle of Dien Bien Phu",
        "Pioneered attacks on hill strongpoints",
        "Maintained unity and high fighting spirit",
        "Awarded the First-Class Combat Merit Order",
        "Received the title Hero Unit of People's Armed Forces",
      ],
      battles: [
        "Battle of Dien Bien Phu - Attack on Eliane 4 (1954)",
        "Operation Lorraine - Nghia Lo (1952)",
        "Battle of Mao Khe (1951)",
        "Various battles along the Vietnam-Laos border",
      ],
      legacy:
        "Regiment 174 left a legacy of courage and sacrifice in decisive battles. The solidarity spirit of ethnic minority soldiers became a symbol of national unity in the resistance.",
    },
    {
      id: 2,
      name: "Regiment 98 Commander",
      rank: "Lieutenant Colonel",
      title: "Regiment Commander - Eliane 2 Breakthrough",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      biography:
        "Regiment 98 was a unit with a heroic fighting tradition, especially famous for attacking enemy fortified positions. The regiment's soldiers were specially trained in mountain assault tactics.",
      achievements: [
        "Successfully captured Eliane 2 on the final day of Dien Bien Phu",
        "Successfully broke through the French fortified defense system",
        "Played a decisive role in the historic victory",
        "Awarded the First-Class Combat Merit Order",
        "Received the Government's Emulation Flag",
      ],
      battles: [
        "Battle of Dien Bien Phu - Attack on Eliane 2 (May 1954)",
        "Various battles in the Northwest (1952-1954)",
        "Border campaigns (1950-1951)",
        "Participated in liberating cities in North Vietnam",
      ],
      legacy:
        "Regiment 98 is recognized as one of the units that played a key role in ending the Battle of Dien Bien Phu. The victory at Eliane 2 paved the way for the complete collapse of the Dien Bien Phu fortress.",
    },
    {
      id: 3,
      name: "Regiment 176 Commander",
      rank: "Lieutenant Colonel",
      title: "Regiment Commander - Special Operations",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      biography:
        "Regiment 176 specialized in special missions and operations in difficult terrain along the Vietnam-Laos border. This unit was specially trained to adapt to forest-mountain conditions and harsh climate.",
      achievements: [
        "Successfully captured Muong Khoua during the Laos campaign",
        "Isolated the Isabelle base at Dien Bien Phu",
        "Successfully executed special reconnaissance missions",
        "Awarded the Second-Class Combat Merit Order",
        "Received commendation from the Minister of Defense",
      ],
      battles: [
        "Laos Campaign - Capture of Muong Khoua (1954)",
        "Isolation of Strongpoint Isabelle at Dien Bien Phu",
        "Operations against French GCMA teams",
        "Reconnaissance and sabotage of enemy supply lines",
      ],
      legacy:
        "Regiment 176 left a legacy of adaptability and creativity in combat. The unit's experiences in operating in complex terrain were widely applied in the army.",
    },
    {
      id: 4,
      name: "Nguyen Van Trung",
      rank: "Sergeant",
      title: "Hero of Armed Forces - Company Commander",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      biography:
        "Sergeant Nguyen Van Trung was born in 1930 in Thai Nguyen, joined the army in 1949. He was one of the exemplary soldiers of the first generation of the 316th Division, loved by comrades for his courage and high sense of responsibility.",
      achievements: [
        "Received the title Hero of People's Armed Forces in 1954",
        "Led the company in many important battles",
        "Saved many wounded comrades during combat",
        "Awarded the Third-Class Combat Merit Order",
        "Received the 'Brave Youth' badge",
      ],
      battles: [
        "Battle of Mao Khe - Frontline company commander (1951)",
        "Nghia Lo Campaign (1952)",
        "Battle of Dien Bien Phu - Participated in attacking hill strongpoints",
        "Small battles in the Northwest region",
      ],
      legacy:
        "Sergeant Nguyen Van Trung is a shining example of patriotism and sacrifice of the young soldier generation. His life and career inspired many generations of soldiers afterward.",
    },
    {
      id: 5,
      name: "Le Van Duc",
      rank: "Senior Colonel",
      title: "Division Political Commissar - Political Education",
      image:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      biography:
        "Senior Colonel Le Van Duc was born in 1920 in Ha Tinh, one of the first political officers of the 316th Division. He played an important role in building fighting spirit and internal unity of the division.",
      achievements: [
        "Built a strong political education system within the division",
        "Strengthened unity among ethnic groups in the unit",
        "Successfully organized propaganda and motivation activities",
        "Awarded the Second-Class Independence Order",
        "Received the title Outstanding Party Member",
      ],
      battles: [
        "Participated in all major campaigns of the 316th Division",
        "Political work during the Battle of Dien Bien Phu",
        "Propaganda and motivation during the 1975 Spring Offensive",
        "Political education for new recruits",
      ],
      legacy:
        "Senior Colonel Le Van Duc left a legacy in building spiritual life for soldiers. His political education methods became an exemplary model studied throughout the army.",
    },
  ],
};

// Hero Modal Functions
function openHeroModal(heroIndex) {
  const modal = document.getElementById("heroModal");
  const currentHeroes = heroesData[currentLanguage];
  const hero = currentHeroes[heroIndex];

  if (!modal || !hero) return;

  // Update modal content
  document.getElementById("heroModalImage").src = hero.image;
  document.getElementById("heroModalImage").alt = hero.name;
  document.getElementById("heroModalRank").textContent = hero.rank;
  document.getElementById("heroModalName").textContent = hero.name;
  document.getElementById("heroModalTitle").textContent = hero.title;
  document.getElementById("heroModalBiography").textContent = hero.biography;
  document.getElementById("heroModalLegacy").textContent = hero.legacy;

  // Update achievements list
  const achievementsList = document.getElementById("heroModalAchievements");
  achievementsList.innerHTML = "";
  hero.achievements.forEach((achievement) => {
    const li = document.createElement("li");
    li.textContent = achievement;
    achievementsList.appendChild(li);
  });

  // Update battles list
  const battlesList = document.getElementById("heroModalBattles");
  battlesList.innerHTML = "";
  hero.battles.forEach((battle) => {
    const li = document.createElement("li");
    li.textContent = battle;
    battlesList.appendChild(li);
  });

  // Update language for modal titles
  updateLanguage(currentLanguage);

  // Show modal
  modal.style.display = "block";
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    modal.style.opacity = "1";
  }, 10);
}

function closeHeroModal() {
  const modal = document.getElementById("heroModal");
  if (modal) {
    modal.style.opacity = "0";
    setTimeout(() => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }, 300);
  }
}

// Initialize Hero Modal Event Listeners
function initializeHeroModal() {
  const modal = document.getElementById("heroModal");
  const modalClose = document.querySelector(".hero-modal-close");

  if (modalClose) {
    modalClose.addEventListener("click", closeHeroModal);
  }

  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeHeroModal();
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal && modal.style.display === "block") {
      closeHeroModal();
    }
  });
}

// Export functions for global access
window.openHeroModal = openHeroModal;
window.closeHeroModal = closeHeroModal;
