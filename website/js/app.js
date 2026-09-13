/**
 * ARRCHIRIO: THE SEVENTH GATE - OFFICIAL WEB APPLICATION
 * Core Interactive Logic & Data Registry
 */

// 1. DỮ LIỆU NHÂN VẬT CANON CHUẨN XÁC
const CHARACTERS_DATA = {
  dienne: {
    id: "dienne",
    name: "Dienne Everhart",
    title: "Trưởng Công Chúa Everhart & Master của Arrchirio",
    age: "16 tuổi (Toàn bộ mạch truyện chính)",
    image: "assets/images/dienne.jpg",
    role: "Leader / Nhà Chiến Thuật Toán Học Asariën",
    manaStat: "Ψ = 35–40 man (Bậc 3: Tinh lọc toán học)",
    weapon: "Thanh kiếm gỗ sồi sứt sẹo (kỷ vật Đêm Everhart)",
    quote: "Ma thuật không phải là phép màu để cầu xin. Nó là một phương trình giải tích; chỉ cần sai một toán tử, cái giá phải trả là cả mạng sống.",
    origin: "Hoàng tộc Vương quốc Tự trị Everhart (bị xóa sổ Năm 0). Rèn luyện 10 năm tại Thung Lũng Tuyết phương Bắc.",
    combatStyle: "Toán học Asariën 4 pha kết hợp kiếm thuật gỗ sồi chuẩn xác, Lam Hỏa 3000°C tinh khiết giải phóng qua mật độ r = 2cm.",
    desc: "Dienne là một thiếu nữ 16 tuổi có vóc dáng thanh mảnh, mái tóc màu hạt dẻ buộc gọn và đôi mắt màu lam thẫm sắc lạnh. Không kiêu sa hay yếu đuối, cô sở hữu sự điềm tĩnh phi thường trước hiểm nguy, luôn giải mã bản chất các ma trận năng lượng thay vì đối đầu bằng bạo lực mù quáng."
  },
  louisa: {
    id: "louisa",
    name: "Louisa",
    title: "Thiếu Nữ Trần Thế (Deuteragonist)",
    age: "18 tuổi",
    image: "assets/images/louisa.jpg",
    role: "Tiên phong cận chiến / Chuyên gia Phi Ma Thuật",
    manaStat: "Ψ = 0 (Mana tuyệt đối bằng không)",
    weapon: "Súng giảm thanh đạn vonfram, Còi Bạc Phá Tần Số, Đại Thái Đao cổ bất hoại",
    quote: "Các người tốn ba mươi giây để niệm một câu chú cổ ngữ dài dòng, còn tôi chỉ mất một phần tư giây để siết cò.",
    origin: "Thế giới con người không ma thuật (Cố đô Kyoto). Đệ tử đầu tiên và bạn đồng hành thân thiết nhất của Dienne.",
    combatStyle: "Cận chiến Judo/CQC, phục kích chiến thuật, dùng sóng âm còi bạc gây nhiễu nhịp niệm chú và mìn EMP vô hiệu hóa Magitech.",
    desc: "Louisa sở hữu mái tóc đen ngắn tỉa layer cá tính, đôi mắt đen sắc bén và chiếc áo khoác bomber đen quen thuộc. Là người duy nhất mang chỉ số Ψ = 0, cô chứng minh rằng con người bình thường bằng trí tuệ và cơ học chính xác có thể cản đứng cả những chùm tia ma thuật hủy diệt."
  },
  diana: {
    id: "diana",
    name: "Diana Everhart",
    title: "Tiểu Công Chúa Reverse London",
    age: "9.5–10 tuổi",
    image: "assets/images/diana.jpg",
    role: "Em gái ruột Dienne / Kiếm vũ Ballet",
    manaStat: "Ψ = 15 man (Dòng máu hoàng tộc thức tỉnh)",
    weapon: "Liễu kiếm bạc nạm đá Sapphire hoàng gia",
    quote: "Chị Dienne... em đã giữ gìn đóa hoa hồng trắng của mẹ suốt mười năm qua giữa màn sương Luân Đôn.",
    origin: "Sinh ra trong cảnh lưu vong tại Reverse London sau khi hoàng thành Everhart sụp đổ 10 năm trước.",
    combatStyle: "Vũ đạo Ballet kết hợp Liễu kiếm mảnh mai, di chuyển lướt gió thanh thoát trên đầu mũi chân.",
    desc: "Diana là cô bé 10 tuổi nhỏ nhắn với mái tóc vàng óng ả bồng bềnh và đôi mắt hoàng gia xanh biếc. Lớn lên được các kỵ sĩ bảo hoàng và Mẫu hậu Eleanor bí mật che chở, cô bé vừa mang nét ngây thơ của trẻ nhỏ, vừa sở hữu lòng dũng cảm phi thường khi bảo vệ Cổng Cổ Đại Big Ben."
  },
  lucien: {
    id: "lucien",
    name: "Lucien Vale",
    title: "Nhà Quản Lý Tài Chính & Hậu Cần Ngầm",
    age: "17 tuổi",
    image: "assets/images/lucien.jpg",
    role: "Hậu cần New Arrchirio / Đàm phán hợp đồng",
    manaStat: "Ψ = 8 man (Ma thuật vi mô phong ấn văn tự)",
    weapon: "Sổ cái da cổ, bàn tính bằng đồng mini, bút ký hợp đồng",
    quote: "Lòng dũng cảm của các cậu rất đáng ngưỡng mộ, nhưng bữa tối và tiền đạn vonfram của ngày mai thì cần được thanh toán bằng vàng thật.",
    origin: "Thương đoàn ngầm Lumeria & Học viện Aetheris. Bỏ lại sự nghiệp để đi theo ngọn cờ của Dienne từ Tập 2.",
    combatStyle: "Tính toán lộ trình, thao túng thị trường chợ đen, thiết lập hành lang rút lui và hợp đồng ma đạo bất khả xâm phạm.",
    desc: "Lucien 17 tuổi, nổi bật với mái tóc nâu chải gọn, cặp kính gọng tròn và chiếc áo trench coat dạ cổ điển. Anh là bộ não thực dụng giữ cho lý tưởng cao đẹp của nhóm luôn đứng vững trên nền tảng tài chính và chiến lược rút lui vững chắc."
  },
  soraya: {
    id: "soraya",
    name: "Soraya",
    title: "Nữ Tư Tế Sa Mạc Dòng Máu Al-Zahra",
    age: "18 tuổi",
    image: "assets/images/soraya.jpg",
    role: "Tư tế cổ đại / Kiểm soát Nghi Thức & Tinh Tú",
    manaStat: "Ψ = 48 man (Hỏa thuật cổ & Ma trận sa mạc)",
    weapon: "Vương trượng hồng ngọc khắc cổ tự Al-Zahra",
    quote: "Gió cát của ốc đảo ngàn năm không bao giờ quên những lời thề đã khắc vào đá.",
    origin: "Vương quốc Sa Mạc Al-Zahra. Chiếc Ghế Sồi Thứ Ba của Hội đồng New Arrchirio.",
    combatStyle: "Hỏa thuật cổ đại nhiệt độ cao, tạo khiên lửa bao bọc đồng đội và triệu hồi bão cát phong tỏa tầm nhìn địch.",
    desc: "Soraya sở hữu làn da nâu khỏe khoắn, mái tóc đen gợn sóng cài chuỗi hạt vàng và đôi mắt hổ phách huyền bí. Vẻ đẹp sắc sảo và sự uy nghiêm của một nữ tư tế hoàng gia giúp cô trở thành bức tường phòng ngự lửa vững chãi cho cả đội."
  },
  ryan: {
    id: "ryan",
    name: "Ryan",
    title: "Thiên Tài Cơ Khí Magitech",
    age: "14 tuổi",
    image: "assets/images/ryan.jpg",
    role: "Đệ tử thứ hai / Kỹ sư chế tạo khí tài",
    manaStat: "Ψ = 12 man (Cộng hưởng dòng điện từ trường)",
    weapon: "Kính bảo hộ Magitech, cờ-lê đồng, lựu đạn xung EMP nén",
    quote: "Thưa Master Dienne! Em vừa độ lại buồng đốt động cơ hơi nước, tốc độ phản ứng đã tăng thêm ba mươi phần trăm!",
    origin: "Thợ máy nhí tại Khu Phế Liệu Lumeria. Luôn kính trọng gọi Dienne là Master.",
    combatStyle: "Chế tạo bẫy điện từ trường EMP, can thiệp van tiết lưu Magitech và sửa chữa khí tài thần tốc trong chiến đấu.",
    desc: "Ryan 14 tuổi, luôn tràn đầy năng lượng với mái tóc hung đỏ bù xù, vệt muội than trên má và cặp kính bảo hộ kéo trên trán. Cậu là biểu tượng cho sự giao thoa kỳ diệu giữa công nghệ hơi nước trần thế và năng lượng Asariën cổ đại."
  },
  rhea: {
    id: "rhea",
    name: "Rhea Everwy",
    title: "Hiệp Sĩ Hoàng Gia Tóc Bạc (Royal Umbraguard)",
    age: "Đóng băng sinh học 22 tuổi (Thực tế 32 tuổi)",
    image: "assets/images/rhea.jpg",
    role: "Chiếc Ghế Sồi Thứ Nhất / Người Bảo Hộ",
    manaStat: "Ψ = 65 man (Kiếm thuật Hoàng Kim Cổ Đại)",
    weapon: "Trường kiếm bạc Everhart, chiến giáp khắc hoa văn thần thoại",
    quote: "I'll stay by your side. Dù mười năm lạc giữa Dòng Chảy Ma Thuật hay đối mặt với sự sụp đổ của vũ trụ, thanh kiếm này vẫn thuộc về Người.",
    origin: "Hộ vệ thân cận của Vương triều Everhart. Đã bọc hậu cho Dienne trốn thoát trong Đêm Everhart sụp đổ.",
    combatStyle: "Thánh kiếm Asariën, chém đứt không gian ranh giới, cơ thể bất hoại trước sự ăn mòn của thời gian.",
    desc: "Rhea là nữ kỵ sĩ uy nghiêm với mái tóc bạc cắt ngắn ngang vai và vết sẹo danh dự trên gò má. Sau một thập kỷ trôi dạt trong Dòng Chảy Astral mà không hề già đi, cô trở về bên Dienne để cùng khép lại Cánh Cửa Thứ Bảy."
  }
};

// 2. DỮ LIỆU 8 VOLUME TIÊU CHUẨN
const VOLUMES_DATA = [
  {
    vol: 1,
    vnTitle: "Công Chúa Mất Đi Vương Quốc",
    enTitle: "The Princess Who Lost Her Kingdom",
    setting: "Thung Lũng Tuyết Phương Bắc",
    words: "13,498 từ",
    chapters: "12 chương",
    theme: "Mất mát, 10 năm rèn kiếm gỗ sồi, giải tích toán học Asariën và bước chân đầu tiên rời núi.",
    synopsis: "Mười năm trước, Vương quốc Everhart sụp đổ trong một đêm thanh trừng bí ẩn. Nàng công chúa Dienne 6 tuổi được nữ hiệp sĩ Rhea Everwy liều mình mở đường máu đưa trốn thoát lên phương Bắc. Dưới sự chỉ dạy của Người Thầy Già, Dienne tôi luyện kiếm thuật gỗ sồi và toán học ma pháp. Năm 16 tuổi, cô giã từ thung lũng tuyết, bắt đầu hành trình tìm lại sự thật."
  },
  {
    vol: 2,
    vnTitle: "Những Thành Phố Không Có Trên Bản Đồ",
    enTitle: "The Cities Beyond the Map",
    setting: "Lumeria & Học Viện Aetheris",
    words: "10,887 từ",
    chapters: "12 chương",
    theme: "Đế quốc Magitech, sự mục ruỗng của giai cấp thống trị, gặp gỡ Lucien Vale.",
    synopsis: "Đặt chân đến thành phố công nghiệp Lumeria dưới vỏ bọc học viên, Dienne chứng kiến công nghệ hơi nước Magitech đang bị Đế quốc lạm dụng để bóc lột năng lượng. Tại đây, cô chạm trán Lucien Vale—một tay buôn thông tin và tài chính ngầm sắc sảo. Cả hai cùng vạch trần âm mưu đen tối của Thẩm Phán Viện."
  },
  {
    vol: 3,
    vnTitle: "Thế Giới Không Có Phép Thuật",
    enTitle: "The World Without Magic",
    setting: "Cố Đô Kyoto (Thế Giới Thực)",
    words: "28,557 từ",
    chapters: "16 chương",
    theme: "Vượt Cổng sang thế giới Ψ = 0, cuộc gặp gỡ định mệnh với Louisa, va chạm tư duy vật lý và ma thuật.",
    synopsis: "Bị truy kích gắt gao, Dienne và Lucien kích hoạt một vết nứt ranh giới và rơi sang thế giới trần thế—nơi không có một hạt mana nào tồn tại. Giữa cơn mưa đêm Kyoto, Dienne gặp Louisa—cô gái mang súng vonfram và tư duy chiến đấu thực dụng. Hai thế giới đối lập bắt đầu tìm thấy tiếng nói chung qua ngôn ngữ của khoa học và sự thấu cảm."
  },
  {
    vol: 4,
    vnTitle: "Những Tàn Tích Của Arrchirio",
    enTitle: "The Ruins of Arrchirio",
    setting: "Pháo Đài Ngầm Sector 7",
    words: "28,248 từ",
    chapters: "16 chương",
    theme: "Tái lập Hội đồng New Arrchirio, thu nạp thợ máy Ryan và nữ tư tế Soraya, trận đấu với cựu binh Vane.",
    synopsis: "Trở về thế giới ma thuật, nhóm tìm thấy căn cứ ngầm Sector 7 bị lãng quên của tổ chức Arrchirio cổ đại. Dienne thu nhận thiên tài cơ khí nhí Ryan và nữ tư tế sa mạc Soraya. Dienne đánh bại cựu binh già Vane không bằng sát phạt mà bằng sự thấu hiểu, chính thức thắp sáng ngọn cờ New Arrchirio với bốn chiếc ghế gỗ sồi."
  },
  {
    vol: 5,
    vnTitle: "Tiếng Vang Từ Biên Cương",
    enTitle: "Echoes of the Frontier",
    setting: "Biên Cương Tuyết Phủ Phương Bắc",
    words: "31,104 từ",
    chapters: "16 chương",
    theme: "Hiện tượng xung Cánh Cửa Thứ Hai, sự thật Rhea biến mất trong Dòng Chảy Astral, bức điện tín từ London.",
    synopsis: "Cánh Cửa Thứ Hai phát xung dữ dội đe dọa nứt vỡ địa tầng. Bằng nguyên lý đảo pha θ = π, Dienne và Louisa phối hợp đẩy lùi hiểm họa năng lượng. Dienne bàng hoàng biết được Rhea đã bị kẹt trong Dòng Chảy Không Gian suốt mười năm. Cuối tập, một bức điện tín khẩn cấp mang gia huy hoàng gia vang lên từ Reverse London: Công chúa Diana vẫn còn sống."
  },
  {
    vol: 6,
    vnTitle: "Dạ Vũ Trong Sương Mù & Bóng Ma Arknight",
    enTitle: "Waltz in the Mist & The Phantom of Arknight",
    setting: "Reverse London (Anh Quốc Nghịch Đảo)",
    words: "24,808 từ",
    chapters: "14 chương",
    theme: "Đoàn tụ em gái Diana 10 tuổi, chân tướng Mẫu hậu Eleanor còn sống, vạch trần kẻ phản bội Lord Arknight.",
    synopsis: "Vượt Cổng sang thành phố sương mù Reverse London, Dienne tìm lại người em gái ruột Diana 10 tuổi với kiếm vũ ballet điêu luyện. Cô phát hiện mẹ mình—Hoàng hậu Eleanor—vẫn sống và đang lãnh đạo mạng lưới kháng chiến ngầm. Âm mưu thao túng Tháp Đồng Hồ Big Ben của các Arknight phản bội bị đập tan."
  },
  {
    vol: 7,
    vnTitle: "Long Mạch Côn Lôn & Chiếc Ghế Thứ Tư",
    enTitle: "The Dragon Leylines of Kunlun & The Fourth Chair",
    setting: "Dãy Núi Tuyết Côn Lôn (Phương Đông)",
    words: "19,799 từ",
    chapters: "14 chương",
    theme: "Phục hồi long mạch Bát Quái, Đạo sĩ Lục Thanh Vân, Louisa tìm thấy Đại Thái Đao cổ bất hoại.",
    synopsis: "Tại phương Đông huyền bí, Dienne bắt tay cùng Đạo sĩ Lục Thanh Vân của Côn Lôn để vá lại các điểm nút long mạch bị tổn hại. Trong một hang động đá cổ, Louisa phát hiện thanh Đại Thái Đao nghìn năm tuổi bất hoại—vũ khí tối thượng không cần mana dành riêng cho người trần thế."
  },
  {
    vol: 8,
    vnTitle: "Những Thành Phố Cổ & Trận Chiến Cân Bằng",
    enTitle: "The Ancient Cities & The Battle of Balance",
    setting: "Cairo, Rome Vatican & Điểm Kỳ Dị Cánh Cửa Thứ Bảy",
    words: "21,303 từ",
    chapters: "16 chương",
    theme: "Đại chiến tại Cánh Cửa Thứ Bảy, Rhea trở về, cái giá của thực tại và Hiệp ước Đình chiến Ba Năm.",
    synopsis: "Hoàng thúc Alden Everhart kích hoạt cỗ máy Điểm Kỳ Dị tại Rome nhằm giam cầm toàn bộ thực tại dưới một trật tự độc đoán. Giữa thời khắc sinh tử, Rhea đạp vỡ Dòng Chảy trở về bảo vệ Dienne. Bằng mũi kiếm gỗ sồi, Dienne phá hủy trục neo thời gian, từ chối ảo mộng quá khứ để bảo vệ tương lai tự do cho cả hai thế giới."
  }
];

// 3. KHỞI TẠO DOM VÀ SỰ KIỆN KHI TRANG TẢI XONG
document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initCharacterModals();
  initVolumeTabs();
  initMagicCalculator();
});

// A. Hiệu ứng cuộn thanh Navigation
function initNavbarScroll() {
  const navbar = document.getElementById("mainNavbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// B. Quản lý Modal Nhân Vật Chi Tiết
function initCharacterModals() {
  const modalBackdrop = document.getElementById("charModalBackdrop");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const detailButtons = document.querySelectorAll(".btn-card-detail");

  if (!modalBackdrop) return;

  function openModal(charKey) {
    const data = CHARACTERS_DATA[charKey];
    if (!data) return;

    document.getElementById("modalCharImg").src = data.image;
    document.getElementById("modalCharImg").alt = data.name;
    document.getElementById("modalCharBadge").textContent = data.title;
    document.getElementById("modalCharName").textContent = data.name;
    document.getElementById("modalCharRole").textContent = data.role;
    document.getElementById("modalCharAge").textContent = data.age;
    document.getElementById("modalCharMana").textContent = data.manaStat;
    document.getElementById("modalCharWeapon").textContent = data.weapon;
    document.getElementById("modalCharOrigin").textContent = data.origin;
    document.getElementById("modalCharCombat").textContent = data.combatStyle;
    document.getElementById("modalCharQuote").textContent = `"${data.quote}"`;
    document.getElementById("modalCharDesc").textContent = data.desc;

    modalBackdrop.classList.add("active");
    document.body.style.overflow = "hidden"; // khóa cuộn nền
  }

  function closeModal() {
    modalBackdrop.classList.remove("active");
    document.body.style.overflow = "";
  }

  detailButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const charKey = btn.getAttribute("data-char");
      openModal(charKey);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("active")) {
      closeModal();
    }
  });
}

// C. Bộ chuyển đổi 8 Volumes Tabs
function initVolumeTabs() {
  const tabsContainer = document.getElementById("volumeTabsContainer");
  if (!tabsContainer) return;

  const volTag = document.getElementById("volNumberTag");
  const volVn = document.getElementById("volVnTitle");
  const volEn = document.getElementById("volEnTitle");
  const volSetting = document.getElementById("volSetting");
  const volWords = document.getElementById("volWords");
  const volTheme = document.getElementById("volTheme");
  const volSynopsis = document.getElementById("volSynopsis");

  function displayVolume(index) {
    const v = VOLUMES_DATA[index];
    if (!v) return;

    volTag.textContent = `VOLUME 0${v.vol} / 08`;
    volVn.textContent = v.vnTitle;
    volEn.textContent = v.enTitle;
    volSetting.textContent = v.setting;
    volWords.textContent = `${v.words} (${v.chapters})`;
    volTheme.textContent = v.theme;
    volSynopsis.textContent = v.synopsis;

    // Cập nhật class active cho buttons
    const allBtns = tabsContainer.querySelectorAll(".volume-tab-btn");
    allBtns.forEach((btn, idx) => {
      if (idx === index) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  // Gắn sự kiện click cho từng tab
  const allBtns = tabsContainer.querySelectorAll(".volume-tab-btn");
  allBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      displayVolume(idx);
    });
  });

  // Hiển thị Tập 1 mặc định
  displayVolume(0);
}

// D. Widget Mô Phỏng Động Lực Học Mana Asariën (Hard Magic Calculator)
function initMagicCalculator() {
  const sliderPsi = document.getElementById("sliderPsi");
  const sliderEta = document.getElementById("sliderEta");
  const valPsiBadge = document.getElementById("valPsiBadge");
  const valEtaBadge = document.getElementById("valEtaBadge");

  const outEffPsi = document.getElementById("outEffPsi");
  const outLossPsi = document.getElementById("outLossPsi");
  const outLossQ = document.getElementById("outLossQ");
  const thermalWarning = document.getElementById("thermalWarning");

  if (!sliderPsi || !sliderEta) return;

  const KAPPA = 100000; // 10^5 Joule/man

  function updateCalculations() {
    const psiSupply = parseFloat(sliderPsi.value);
    const etaPercent = parseFloat(sliderEta.value);
    const eta = etaPercent / 100;

    // Hiển thị badge giá trị đầu vào
    valPsiBadge.textContent = `${psiSupply} man`;
    valEtaBadge.textContent = `${etaPercent}%`;

    // Công thức Canon:
    // Psi_eff = eta * Psi_supply
    // Psi_loss = (1 - eta) * Psi_supply
    // Q_loss = kappa * Psi_loss (Joule)
    const psiEff = eta * psiSupply;
    const psiLoss = (1 - eta) * psiSupply;
    const qLossJoules = psiLoss * KAPPA;
    const qLossMegaJoules = qLossJoules / 1000000;

    outEffPsi.textContent = `${psiEff.toFixed(2)} man`;
    outLossPsi.textContent = `${psiLoss.toFixed(2)} man`;
    outLossQ.textContent = `${qLossMegaJoules.toFixed(2)} MJ (${qLossJoules.toLocaleString()} J)`;

    // Cảnh báo nhiệt phản chấn sinh học
    if (etaPercent < 60 || qLossMegaJoules > 1.5) {
      thermalWarning.style.display = "flex";
      thermalWarning.innerHTML = `⚠️ <strong>CẢNH BÁO QUÁ NHIỆT (Thermal Backlash):</strong> Nhiệt phản chấn Q vượt ngưỡng an toàn! Da thịt bị bỏng rộp và kinh mạch Asariën bị tổn hại nghiêm trọng.`;
    } else if (etaPercent >= 90) {
      thermalWarning.style.display = "flex";
      thermalWarning.style.background = "rgba(56, 189, 248, 0.12)";
      thermalWarning.style.borderColor = "rgba(56, 189, 248, 0.4)";
      thermalWarning.style.color = "#7dd3fc";
      thermalWarning.innerHTML = `✨ <strong>TRẠNG THÁI HOÀN HẢO (Lam Hỏa Đạt Đỉnh):</strong> Hiệu suất cực cao! Nhiệt phản chấn tỏa tản mát vô hại ra không khí xung quanh tay nàng.`;
    } else {
      thermalWarning.style.display = "none";
    }
  }

  sliderPsi.addEventListener("input", updateCalculations);
  sliderEta.addEventListener("input", updateCalculations);

  updateCalculations();
}
