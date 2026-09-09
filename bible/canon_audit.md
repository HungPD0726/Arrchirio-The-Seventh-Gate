# Story Bible: MASTER CANON AUDIT TOÀN BỘ SERIES (VOL 1–8)
### Comprehensive Continuity Audit, Hard Magic Matrix & Development Tracker

> **Trạng thái:** ACTIVE AUDIT & DEVELOPMENT (Đang khắc phục và chuẩn hóa toàn diện)  
> **Ghi chú quan trọng:** Tuyên bố "100% Flawless / Frozen" trước đây đã chính thức được gỡ bỏ theo kết quả thẩm định phát triển toàn series. Tệp này hiện là **Bảng Theo Dõi Hiện Trạng Thực Tế (Master Status Tracker)** phân loại theo các mã trạng thái: `[RESOLVED]`, `[IN_PROGRESS]`, `[OPEN]`, và `[WONTFIX]`.  
> **Quy chiếu dòng thời gian tối cao:** Xem [`bible/chronology.md`](chronology.md).

---

## 1. MA TRẬN THEO DÕI VẤN ĐỀ CANON & CONTINUITY

### 1.1. Nhóm Lỗi Đỏ (Red Alerts — Mâu thuẫn nghiêm trọng)

| ID | Vấn đề & Mô tả ban đầu | Mức độ | Hiện trạng | Giải pháp & Vị trí sửa đổi |
|:---|:---|:---:|:---:|:---|
| **CANON-RED-01** | **Số phận Rhea (Tri-state Paradox)**:<br>- `vol1/epilogue.md` cho Rhea làm Đại đội trưởng tại Tiền đồn 9.<br>- `vol4/epilogue.md` cho Rhea lang thang uống rượu ở biên giới.<br>- Từ `vol5/ch10.md` xác nhận kẹt trong Astral Current 10 năm. | **Đỏ** | **`[RESOLVED]`** | - **Vol 1 Epilogue**: Viết lại hoàn toàn thành cảnh **Merlin tại Hư Không Ranh Giới** quan sát Cổng Thứ Bảy theo đúng `outline/volume_1.md` và `master_plot.md`. Đã dọn sạch mọi đề cập tới Tiền đồn 9.<br>- **Vol 4 Epilogue**: Viết lại thành cảnh Cổng Thứ Hai phát xung chạm vào Dòng Chảy Ma Thuật, nơi Rhea vung kiếm tạo phản chấn kiếm khí tới Frost-Pass; đan xen góc nhìn Louisa tại Kyoto chuẩn bị vượt Cổng. Đồng bộ vào `vol1/epilogue.md`, `Volume1_Full.md`, `vol4/epilogue.md`, `Volume4_Full.md`. |
| **CANON-RED-02** | **Tuổi & Ký ức Dienne (Sơ sinh bug)**:<br>Dienne 6 tuổi khi Everhart sụp đổ (nhớ rõ cha mẹ, bữa tiệc, Rhea) nhưng nhiều đoạn Vol 4–5 gọi cô là "trẻ sơ sinh". | **Đỏ** | **`[RESOLVED]`** | Đã quét và khử sạch toàn bộ từ "trẻ sơ sinh" gán cho Dienne 6 tuổi trong toàn bộ repo (`chapters/vol4/epilogue.md`, `chapters/vol5/ch01.md`, `chapters/vol5/ch10.md`, `chapters/vol5/ch11.md` và các bản Full). Chuẩn hóa thành "cô bé sáu tuổi / đứa trẻ sáu tuổi". |
| **CANON-RED-03** | **Lệch tuổi Rhea**:<br>Canon ghi 22 tuổi khi bọc hậu; `vol5/ch10.md` gọi 17–18 tuổi; `vol4/epilogue.md` cũ gọi 27–28 tuổi; trong khi timeline yêu cầu 32 tuổi. | **Đỏ** | **`[RESOLVED]`** | Chuẩn hóa tuổi Rhea: **22 tuổi** khi bọc hậu ở Năm 0 $\to$ **32 tuổi** theo dòng thời gian ngoài ở Năm 10. Thể trạng và diện mạo sinh học được bảo toàn ở tuổi 22 do thời gian đóng băng trong Dòng Chảy Ma Thuật. Đã sửa trong `vol5/ch10.md`, `Volume5_Full.md`, `characters.md`, `chronology.md`. |
| **CANON-RED-04** | **Nghịch lý tuổi & ngày sinh Diana Everhart**:<br>Diana 15 tuổi ở Năm 10, nhưng mô tả cũ nói sinh sau khi cha mẹ vượt Cổng hoặc là trẻ sơ sinh đêm Everhart sụp đổ ($10 \neq 15$). | **Đỏ** | **`[RESOLVED]`** | Chuẩn hóa số học tuyệt đối: Diana sinh **Năm -5** tại hoàng cung Everhart (kém Dienne đúng 1 tuổi). Đêm Everhart sụp đổ (**Năm 0**), Diana tròn **5 tuổi** ($0 - (-5) = 5$), được mẹ và hộ vệ mở đường máu sơ tán sang Reverse London. Ký ức hoàng cung thuở ấu thơ bị xóa nhòa bởi sang chấn tâm lý đêm hỏa hoạn và cuộc đào thoát bão tố. Tại **Năm 10**, Diana tròn **15 tuổi** ($10 - (-5) = 15$), Dienne tròn **16 tuổi** ($10 - (-6) = 16$). Đã đồng bộ `chronology.md`, `characters.md`, `vol6/prologue.md`. |

---

### 1.2. Nhóm Lỗi Vàng (Yellow Alerts — Tính nhất quán & Lore)

| ID | Vấn đề & Mô tả | Mức độ | Hiện trạng | Giải pháp & Vị trí sửa đổi |
|:---|:---|:---:|:---:|:---|
| **CANON-YEL-01** | **Tuổi Dienne rời núi**:<br>`characters.md` dòng 14 ghi 15 tuổi; bản thảo và audit ghi 16 tuổi. | **Vàng** | **`[RESOLVED]`** | Đã sửa `characters.md` dòng 14 thành 16 tuổi (rời thung lũng tuyết vào đầu năm thứ 10). Khớp với `chronology.md`. |
| **CANON-YEL-02** | **Gộp hai cuộc thanh trừng làm một**:<br>Arrchirio bị thanh trừng 20 năm trước (Năm -10) và Everhart sụp đổ 10 năm trước (Năm 0) bị một số chương nhập làm một ("20 năm trước Everhart sụp đổ"). | **Vàng** | **`[RESOLVED]`** | Đã tách bạch hoàn toàn: Mốc 20 năm dành cho sự kiện Arrchirio cũ sụp đổ và khởi đầu dao động của Alden; mốc 10 năm dành cho Đêm Everhart sụp đổ. Đã sửa trong `vol4/prologue.md`, `Volume4_Full.md`, `vol6/ch09.md`, `vol6/ch12.md`, `Volume6_Full.md`, `vol7/ch06.md`, `Volume7_Full.md`. |
| **CANON-YEL-03** | **Outline lệch bản thảo (Epilogues)**:<br>`master_plot.md` nói Epilogue Vol 1 là Merlin nhưng bản thảo là Rhea Outpost 9. | **Vàng** | **`[RESOLVED]`** | Đã viết lại Epilogue Vol 1 khớp 100% với outline Merlin. Epilogue Vol 4 khớp với Dòng Chảy Ma Thuật và Louisa tại Kyoto. |
| **CANON-YEL-04** | **Công thức Hard Magic và Đơn vị**:<br>- $Q = \Psi\eta\Delta T$ sai vai trò hiệu suất.<br>- `man` lúc gọi năng lượng, lúc định nghĩa đom đóm/giây (công suất).<br>- `magic.md` nói 2 định luật Merlin, `mana_physics.md` có 3.<br>- Lunar Elves $\eta \to 100\%$ mâu thuẫn $\eta < 100\%$. | **Vàng** | **`[RESOLVED]`** | Cập nhật `bible/mana_physics.md` làm Single Source of Truth: $Q_{\text{loss}} = (1-\eta)\Psi_{\text{cung cấp}}$; $1\text{ man} = 1\text{ J}$ (năng lượng), thông lượng $\text{man/s}$ (công suất); 3 định luật Merlin xuyên suốt; $\eta \to 100\%$ là giới hạn tiệm cận lý tưởng ($\eta \approx 99.9\%$). Đã đồng bộ `magic.md` và `species.md`. |
| **CANON-YEL-05** | **Ngôn ngữ Asariën & Ngoại lệ Thần chú**:<br>- Tuyên bố "không phải Latin" nhưng từ vựng Latinh hóa nhiều.<br>- Quy tắc 4 pha nhưng bản thảo có câu chú 2–3 pha. | **Vàng** | **`[RESOLVED]`** | Đã chuẩn hóa trong `asarien_codex.md`: Hệ thống ký tự trong sách loài người là bản chuyển tự La-tinh hóa hàn lâm (Academic Romanization System) do Merlin và học giả tiền triều ký âm. Bổ sung ngoại lệ chính thức: Kỹ thuật Niệm Chú Rút Gọn (Shorthand Invocation) trong thực chiến. |
| **CANON-YEL-06** | **Thiết bị "Còi bạc EMP"**:<br>Âm thanh phá vỡ ma trận cộng hưởng nhưng không phải xung điện từ EMP vật lý. | **Vàng** | **`[RESOLVED]`** | Đã đổi tên thành "Còi bạc cộng hưởng ma trận" / "Còi bạc phá sóng ma trận" (Acoustic Matrix Resonator) trong `vol8/ch14.md`, `Volume8_Full.md`, `state.md`, `style_profile.md`, `world.md`, `outline/volume_8.md`, `outline/volume_5.md`. |
| **CANON-YEL-07** | **Màn tái xuất của Rhea ở Vol 8 Ch 11**:<br>Xuất hiện mang cảm giác cứu viện đúng giây cuối (Deus Ex Machina). | **Vàng** | **`[RESOLVED]`** | Đã nâng cấp `vol8/ch11.md` và `Volume8_Full.md`: Rhea trở lại là kết quả hiệp lực chủ động của cả 7 thành viên (Louisa, Ryan, Diana, Lục Thanh Vân, Lucien, Soraya, Dienne) kích hoạt Dấu Ấn Hướng Tâm (Vol 5), đồng bộ 7 nút ma trận mở lối neo giữ Dòng Chảy Ma Thuật. |

---

### 1.3. Nhóm Vấn Đề Phát Triển Mở (Open Issues — Developmental & Line Edit)

| ID | Vấn đề & Mục tiêu | Hiện trạng | Phạm vi thực hiện |
|:---|:---|:---:|:---|
| **CANON-OPN-01** | **Độ chín của Phản diện & Chính trị Aurelia**:<br>Nâng tầm Hoàng thúc Alden và Đế chế Aurelia: có lý lẽ bảo vệ trật tự hợp lý trước nỗi sợ sụp đổ thực tại của dân chúng, vượt lên mô-típ thiện-ác nhị nguyên thông thường. Xử lý vai trò Hoàng đế. | **`[RESOLVED]`** | - Xác lập Hoàng quyền Aurelia: Hoàng đế Aurelia VII là quân vương bù nhìn già yếu bị giam lỏng tại Cung điện Palatine; quyền lực tuyệt đối nằm trong tay Nhiếp chính vương kiêm Lord Arknight Alden Everhart.<br>- Gỡ bỏ trận chiến phantom với "Hoàng đế" trong `master_plot.md` và `outline/volume_8.md`.<br>- Nâng cấp động cơ của Alden thành học giả duy lý cực đoan trong `characters.md` và các chương.<br>- Bổ sung góc nhìn thị dân New Rome (chấp nhận trật tự sắt thép để đổi lấy an toàn, sợ hãi New Arrchirio là kẻ khủng bố) trong `chapters/vol8/ch05.md` và `Volume8_Full.md`. |
| **CANON-OPN-02** | **Thanh lọc AI Slop & Định hình Văn phong Mới**:<br>Lấy Chương 12–14 Vol 8 làm chuẩn văn phong: câu thoại ngắn có subtext, ma thuật có cái giá vật lý, giảm các từ lạm dụng cực đại ("khẽ" 316 lần, "lập tức" 123 lần, "xé toạc" 69 lần, "tối thượng", "vĩ đại"). | **`[RESOLVED]`** | - Nâng cấp toàn diện `bible/style_profile.md` thành Động cơ Chống AI Slop (Anti-AI Slop Engine).<br>- Thiết lập Blacklist mở rộng: Cấm người kể tâng bốc nhân vật; cấm bệnh gán một đạo cụ máy móc (Prop-fetishism); cấm phản diện diễn thuyết giữa combat; cấm kết thúc chương giáo điều.<br>- Khóa Chương 12–14 Tập 8 làm Tiêu Chuẩn Vàng (Gold Standard Benchmark) toàn series. |
| **CANON-OPN-03** | **Tự động hóa Repo & CI**:<br>Tự động sinh `VolumeX_Full.md` từ các chương con, kiểm tra liên kết gãy, kiểm tra casing `asarien_codex.md`. | **`[RESOLVED]`** | - Xây dựng thành công `scripts/recompile_volumes.ps1` và `scripts/volume_meta.json`.<br>- Tự động hóa biên dịch 8 Volume sạch sẽ, chuẩn xác đến từng byte.<br>- Tích hợp CI Audit: Quét lỗi sơ sinh, quét "còi bạc EMP", quét link gãy và sai lệch casing.<br>- Thống kê chính xác số từ (176.183 từ) và dung lượng file (802.8 KB), đồng bộ vào `README.md` và `state.md`. |

---

## 2. BẢNG TỔNG KẾT TIẾN ĐỘ THẨM ĐỊNH

- **Tổng số lỗi Đỏ (Critical Continuity):** 4/4 đã được xử lý triệt để (**`[RESOLVED]`**).
- **Tổng số lỗi Vàng (Continuity/Lore/Hard Magic):** 7/7 đã được xử lý triệt để (**`[RESOLVED]`**).
- **Tổng số vấn đề Mở (Developmental/Style/Automation):** 3/3 đã được xử lý triệt để (**`[RESOLVED]`**).
- **Trạng thái Series hiện tại:** **DEVELOPMENTAL CANON FULLY AUDITED & STABILIZED (14/14 RESOLVED)**. Ready for developmental reading & targeted line edits.
