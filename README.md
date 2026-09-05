# ARRCHIRIO: THE SEVENTH GATE (Cánh Cửa Thứ Bảy)
### Official Novel Studio Workspace

Chào mừng bạn đến với không gian sáng tác tác phẩm Light Novel **ARRCHIRIO: THE SEVENTH GATE**.

---

## 📁 Cấu Trúc Dự Án Hoàn Chỉnh

```text
mylightnovel/
├── .agents/skills/                   <-- Hệ sinh thái 5 Skill chuyên biệt + Orchestrator
│   ├── novel-craft/                  <-- Master Orchestrator (Điều phối tổng thể)
│   ├── arrchirio-canon/              <-- Continuity Guard & Khóa Hard Magic (Gatekeeper)
│   ├── arrchirio-style/              <-- Động cơ văn phong & Bộ lọc Anti-AI Slop
│   ├── arrchirio-story-review/       <-- Bác sĩ chẩn đoán cốt truyện (Story Doctor)
│   ├── arrchirio-chapter-writer/     <-- Pipeline chấp bút 6 bước có kiểm soát
│   └── arrchirio-worldbuilder/       <-- Mở rộng thế giới theo cơ chế [PROPOSAL] First
├── bible/                            <-- Hệ thống Story Bible chuẩn mực
│   ├── style_profile.md              <-- Quy chuẩn văn phong, nhịp câu & danh sách cấm kỵ AI Slop
│   ├── world.md                      <-- Thiết lập thế giới & Trục du hành thành phố
│   ├── places.md                     <-- Địa lý 15 thành phố & kỳ quan ma thuật (9 trục chuẩn mực)
│   ├── species.md                    <-- 7 chủng tộc (Human, Lunar Elves, Midgogant, Sky Kin...)
│   ├── characters.md                 <-- Hồ sơ nhân vật (Dienne, Louisa, Ryan, Soraya, Lucien, Diana, Rhea...)
│   ├── Merlin.md                     <-- Canon về Merlin, Paradox & Gate 7
│   ├── magic.md                      <-- Triết lý & hệ thống ma thuật tổng quan
│   ├── mana_physics.md               <-- Động lực học Mana & Toán học ma pháp (3 Định luật Merlin)
│   ├── asarien_codex.md               <-- Ngôn ngữ cổ Asariën, ngữ pháp 4 pha & thần chú
│   ├── magic_appendix.md             <-- Phụ lục xuất bản (Ký hiệu ma pháp trận, 5 ví dụ)
│   ├── canon_audit.md                <-- Kiểm định & Khóa Canon (Audit mâu thuẫn & Hard Magic)
│   └── state.md                      <-- Trạng thái cốt truyện (Volume 8 Tracker)
├── outline/                          <-- Dàn ý chi tiết các Volume
│   ├── master_plot.md                <-- Cốt truyện tổng thể & lộ trình tương lai (Vol 1-8)
│   ├── volume_1.md                   <-- Dàn ý Tập 1 (Công chúa mất đi vương quốc)
│   ├── volume_2.md                   <-- Dàn ý Tập 2 (Những thành phố không có trên bản đồ)
│   ├── volume_3.md                   <-- Dàn ý Tập 3 (Thế giới không có phép thuật)
│   ├── volume_4.md                   <-- Dàn ý Tập 4 (Những tàn tích của Arrchirio)
│   ├── volume_5.md                   <-- Dàn ý Tập 5 (Tiếng vang từ biên cương)
│   ├── volume_6.md                   <-- Dàn ý Tập 6 (Reverse London & Bức điện Diana)
│   ├── volume_7.md                   <-- Dàn ý Tập 7 (Long Mạch Côn Lôn & Chiếc Ghế Thứ Tư)
│   └── volume_8.md                   <-- Dàn ý Tập 8 (Những Thành Phố Cổ & Trận Chiến Cân Bằng - Đại Kết Cục)
├── chapters/
│   ├── vol1/                         <-- Bản thảo Tập 1 (Đã hoàn thành 100% - 122 KB)
│   ├── vol2/                         <-- Bản thảo Tập 2 (Đã hoàn thành 100% - 66 KB)
│   ├── vol3/                         <-- Bản thảo Tập 3 (Đã hoàn thành 100% Webnovel - 176 KB)
│   ├── vol4/                         <-- Bản thảo Tập 4 (Đã hoàn thành 100% Webnovel - 172 KB)
│   ├── vol5/                         <-- Bản thảo Tập 5 (Đã hoàn thành 100% Webnovel - 193 KB)
│   ├── vol6/                         <-- Bản thảo Tập 6: Dạ Vũ Trong Sương Mù (Đã hoàn thành 100% - 148 KB)
│   ├── vol7/                         <-- Bản thảo Tập 7: Long Mạch Côn Lôn (Đã hoàn thành 100% - 114 KB)
│   └── vol8/                         <-- Bản thảo Tập 8: Đại Kết Cục Tối Thượng (Đã hoàn thành 100% - 124 KB)
│       ├── Volume8_Full.md
│       ├── prologue.md -> ch14.md
│       └── epilogue.md
├── templates/scene_template.md       <-- Biểu mẫu Scene & Sequel
└── README.md                         <-- Hướng dẫn này
```

---

## 🚀 Hướng Dẫn Vận Hành Studio Cùng AI (Showrunner Playbook)

Trong studio này, **bạn là Showrunner / Tác giả tối cao**, còn AI đóng vai trò là **Hội đồng Biên tập & Trợ lý Chấp bút**. Hệ thống được chia thành 5 module chuyên sâu:

### 1. 🛡️ Bảo Vệ Canon & Tính Liên Tục (`arrchirio-canon`)
*Tra cứu `bible/canon_audit.md`, `bible/state.md`, `bible/mana_physics.md` để ngăn chặn tuyệt đối mâu thuẫn.*
* *"Kiểm tra canon phân cảnh này."*
* *"Đoạn này có vi phạm định luật bảo toàn $\Psi$ và tản nhiệt $\eta$ không?"*
* *"Kiểm tra lại trang bị và vết thương hiện tại của Dienne/Louisa trong `state.md`."*

### 2. 🎨 Văn Phong & Thanh Trừng AI Slop (`arrchirio-style`)
*Dựa trên `bible/style_profile.md` để gọt giũa câu chữ, khử văn mẫu dịch máy, đan xen nhịp câu và bảo toàn giọng thoại.*
* *"Gọt giũa đoạn văn này: khử các từ ngữ sáo rỗng thường thấy của AI."*
* *"Viết lại phân cảnh này với nhịp câu dồn dập (staccato) cho cảnh cận chiến."*
* *"Kiểm tra xem câu thoại của Louisa có bị mất chất cộc lốc/sát khí ngầm không."*

### 3. 🩺 Bác Sĩ Chẩn Đoán Truyện (`arrchirio-story-review`)
*Ứng dụng mô hình Story Sense (Assess $\to$ Diagnose $\to$ Intervene $\to$ Reassess) để bắt bệnh mà không tự ý viết đè lên tác giả.*
* *"Review chương này giúp tôi: Scene Engine có đủ Desire, Dilemma và Cost không?"*
* *"Tại sao phân cảnh này đọc cảm giác hơi trôi tuột?"*
* *"Đoạn này có bị lỗi nhồi nhét lore (Exposition dump) không?"*

### 4. ✍️ Quy Trình Chấp Bút 6 Bước Có Kiểm Soát (`arrchirio-chapter-writer`)
*Chuỗi SOP khép kín: Pre-Flight $\to$ Beat Sheet $\to$ Show-Don't-Tell Draft $\to$ Audit $\to$ Scrubbing $\to$ State Proposal.*
* *"Lên dàn ý 3 beat cho Chương mới dựa theo `outline/`."*
* *"Chấp bút Beat 1 chú ý miêu tả ngũ quan (mùi khói than đá, hơi lạnh, tiếng kim khí)."*
* *"Tạo bản đề xuất cập nhật `bible/state.md` sau khi kết thúc chương."*

### 5. 🏛️ Mở Rộng Thế Giới Proposal-First (`arrchirio-worldbuilder`)
*Phỏng vấn sâu từng lớp (Writers Toolkit), xuất bản `[PROPOSAL]` độc lập, tuyệt đối không tự ý sửa Bible.*
* *"Tôi muốn thiết kế một thành phố mới trên Trục Tây Bắc, hãy phỏng vấn tôi từng bước."*
* *"Thiết kế một món vũ khí ma đạo cơ khí cho Ryan chế tạo."*
* *"Xuất bản đề xuất `[PROPOSAL]` để tôi phê duyệt trước khi đưa vào `bible/places.md`."*

---

## ✍️ Nguyên Tắc Vàng Cho Tác Giả

1. **Khóa State (State Continuity):** Luôn yêu cầu AI cập nhật `bible/state.md` sau mỗi chương. Đây là mỏ neo giúp AI không bao giờ bị quên chi tiết dù bộ truyện kéo dài 15–20 Volume.
2. **Quyền Quyết Định Thuộc Về Bạn:** Mọi sáng tạo mới của AI chỉ là bản đề xuất `[PROPOSAL]`. Chỉ khi bạn duyệt, nó mới trở thành Canon chính thức!
