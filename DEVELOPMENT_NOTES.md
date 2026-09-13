# DEVELOPMENT & CONTINUITY NOTES
### Nhật Ký Phát Triển, Kiểm Toán Canon & Lịch Sử Bản Thảo

Tài liệu này ghi lại toàn bộ quá trình phát triển, kiểm soát tính liên tục (Continuity Audit), và lịch sử các đợt rà soát chất lượng cho *Arrchirio: The Seventh Gate*.

---

## 📌 Tổng Quan Tiến Độ Series

- **Quy mô:** 8 Volume (Toàn bộ cốt truyện chính đã hoàn thành 100%).
- **Trạng thái:** Master Complete & Đang hoàn thiện các đợt gọt giũa văn phong, kiểm toán canon chuẩn bị xuất bản.
- **Quy trình đóng gói CI:** Script tự động `scripts/recompile_volumes.ps1` đảm bảo tính nhất quán tuyệt đối giữa các chương lẻ và tệp Full Volume.

---

## 🛠️ Lệnh Tái Biên Dịch & Kiểm Tra Tự Động (CI Tooling)

Dự án sử dụng bộ script kiểm định tự động:

```powershell
# Biên dịch lại toàn bộ 8 Volume và kiểm tra canon:
powershell -ExecutionPolicy Bypass -File .\scripts\recompile_volumes.ps1

# Chỉ kiểm tra tính hợp lệ và drift mà không ghi đè file:
powershell -ExecutionPolicy Bypass -File .\scripts\recompile_volumes.ps1 -AuditOnly
```

### Các Tiêu Chí Kiểm Định Bắt Buộc (Pass Criteria)
1. **Infant Paradox Check:** Không để Dienne bị nhầm lẫn thành trẻ sơ sinh trong Đêm Everhart sụp đổ (Dienne lúc đó 6 tuổi; Diana mới là bào thai).
2. **Deprecated Terminology:** Loại bỏ hoàn toàn các thuật ngữ phế truất như "còi bạc EMP" (chuẩn hóa thành Còi Bạc Phá Tần Số + Mìn EMP).
3. **Casing & Naming Integrity:** Chuẩn hóa đúng chữ hoa thường cho `bible/asarien_codex.md`.
4. **Clean File URIs:** Không để sót các đường dẫn tuyệt đối cục bộ (`file:///` hoặc `sandbox:/`) trong kho văn bản chính thức.
5. **Brand Integrity:** Giữ đúng quyền tác giả và showrunner `HungPD0726`.

---

## 📋 Lịch Sử Kiểm Toán Canon (Major Audit Log)

### Đợt Kiểm Toán Toàn Diện (Commit 858cce2 & Hậu kỳ)
- **Chuẩn hóa Dòng Thời Gian:**
  - Mở đầu Tập 1: Sửa mốc Chương 1 thành `Mười năm trước — ba ngày trước Đêm Everhart sụp đổ` (xảy ra khi Dienne 6 tuổi, 3 ngày trước đêm diệt vong).
  - Bức điện Diana (Tập 5 Epilogue): Sửa mốc tháo chạy thành `Mười năm trước`, khi Mẫu hậu Eleanor đang mang thai Diana được hộ tống vượt Cổng sang Reverse London.
  - Diana Everhart: Chuẩn hóa 9.5–10 tuổi (không phải 15 tuổi) trên toàn bộ Tập 6–7 và Story Bible; làm mềm lời thoại phù hợp lứa tuổi thiếu nhi được nuôi dạy trang nhã; bổ sung mạng lưới bảo hộ ngầm sau khi người dì họ qua đời.
  - Dienne Everhart: 16 tuổi trong toàn bộ Volume 2–8 (Năm 10); màu tóc thống nhất **màu hạt dẻ** trên toàn series.
  - Lucien Vale: 17 tuổi (Tập 3 Chương 1; Tập 4 Prologue).
  - Hoàng thúc Alden Everhart: 40 tuổi (trông già dặn và nhiều nếp nhăn hơn tuổi thật).
  - Nữ hiệp sĩ Rhea Everwy: Mái tóc ngắn ngang vai màu bạc bị đóng băng sinh học ở tuổi 22.
- **Hệ Thống Chính Trị & Thuật Ngữ Arknight:**
  - Thống nhất: Bốn mươi quốc gia và thành bang độc lập (không gọi là "bốn mươi thế giới" hay "bốn mươi thuộc địa").
  - Chuẩn hóa: Arknight là danh hiệu cổ của Arrchirio; Lord Arknight là danh hiệu Alden Everhart chiếm dụng; Arknight Directorate là tổ chức; Arknight Legion là quân đoàn. Xóa bỏ khái niệm "gia tộc Arknight" (Alden thuộc gia tộc Everhart).
  - Động cơ Alden: Kích hoạt Cánh Cửa Thứ Bảy nhằm khóa toàn bộ thực tại dưới trật tự sắt thép duy nhất để ngăn entropy và chiến tranh hủy diệt, không phải vì ham muốn tiếm ngôi tầm thường.
- **Hard Magic & Vật Lý Mana:**
  - Khắc phục vi phạm Định luật 1 Merlin ở Tập 5: Sóng ngược pha triệt tiêu biên độ tại cửa phát, năng lượng không mất đi mà bị đẩy vào 12 vành tản nhiệt biến thành nhiệt và dao động cơ học.
  - Sửa công thức $Q_{\text{loss}}$: $\Psi_{\text{loss}} = (1 - \eta)\Psi_{\text{cung cấp}}$ (man) và $Q_{\text{loss}} = \kappa \Psi_{\text{loss}}$ (Joule).
  - Đồng bộ thần chú 4 pha đầy đủ; niệm chú rút gọn (2–3 pha) phải trả giá bằng suy giảm hiệu suất và phản chấn nhiệt.
- **Văn Phong & Cân Bằng Sức Mạnh:**
  - Loại bỏ các kết thúc chương mang tính giáo điều/tổng kết đạo đức (Tập 4 Chương 8).
  - Giảm lạm dụng từ đệm sáo rỗng ("khẽ", "lập tức", "xé toạc", "vĩ đại", "tuyệt đối") và giảm dấu chấm than.
  - Khử tật xấu biến nhân vật thành "giá treo đạo cụ" (kẹo mút Louisa, cờ lê Ryan, sổ cái Lucien).
  - Cân bằng sức mạnh: Louisa phối hợp phục kích cùng đồng đội, không một mình đánh bại cả tiểu đoàn; hiệp ước đình chiến có sự tham gia ký kết và tranh luận của chính quyền dân sự và các đại biểu trưởng thành.
