# STUDIO WORKFLOW & SHOWRUNNER PLAYBOOK
### Quy Trình Vận Hành Sáng Tác AI Cho Tác Phẩm Arrchirio: The Seventh Gate

Tài liệu này chứa toàn bộ hướng dẫn dành cho **Showrunner (Tác giả)** và **Hệ thống AI Assistant (Hội đồng Biên tập)** để duy trì chất lượng sáng tác, bảo vệ canon và kiểm soát tiến độ của series.

---

## 📁 Cấu Trúc Dự Án Hoàn Chỉnh

```text
mylightnovel/
├── .agents/skills/                   <-- Hệ sinh thái 6 Skill chuyên biệt + Orchestrator
│   ├── novel-craft/                  <-- Master Orchestrator (Điều phối tổng thể)
│   ├── arrchirio-canon/              <-- Continuity Guard & Khóa Hard Magic (Gatekeeper)
│   ├── arrchirio-style/              <-- Động cơ văn phong & Bộ lọc Anti-AI Slop
│   ├── arrchirio-story-review/       <-- Bác sĩ chẩn đoán cốt truyện (Story Doctor)
│   ├── arrchirio-chapter-writer/     <-- Pipeline chấp bút 6 bước có kiểm soát
│   ├── arrchirio-worldbuilder/       <-- Mở rộng thế giới theo cơ chế [PROPOSAL] First
│   └── arrchirio-illustrator/        <-- Mỹ thuật thị giác, Concept Art & Tranh minh họa
├── bible/                            <-- Hệ thống Story Bible chuẩn mực
│   ├── chronology.md                 <-- Single Source of Truth Dòng thời gian Series
│   ├── style_profile.md              <-- Quy chuẩn văn phong, nhịp câu & Anti-AI Slop Engine
│   ├── world.md                      <-- Thiết lập thế giới & Trục du hành thành phố
│   ├── places.md                     <-- Địa lý 15 thành phố & kỳ quan ma thuật (9 trục chuẩn mực)
│   ├── species.md                    <-- 7 chủng tộc (Human, Lunar Elves, Midgogant, Sky Kin...)
│   ├── characters.md                 <-- Hồ sơ nhân vật (Dienne, Louisa, Ryan, Soraya, Lucien, Diana, Rhea...)
│   ├── Merlin.md                     <-- Canon về Merlin, Paradox & Gate 7
│   ├── magic.md                      <-- Triết lý & hệ thống ma thuật tổng quan
│   ├── mana_physics.md               <-- Động lực học Mana & Toán học ma pháp (3 Định luật Merlin)
│   ├── asarien_codex.md              <-- Ngôn ngữ cổ Asariën, ngữ pháp 4 pha & thần chú
│   ├── magic_appendix.md             <-- Phụ lục xuất bản (Ký hiệu ma pháp trận, 5 ví dụ)
│   ├── canon_audit.md                <-- Master Status Tracker & Kiểm định Canon (Active Tracker)
│   ├── arrchirio_codex.md            <-- Cấu trúc thứ bậc, 5 đại hệ, Umbraguard & Thần thoại Hai Chị Em
│   └── state.md                      <-- Trạng thái cốt truyện (Volume 8 Tracker)
├── outline/                          <-- Dàn ý chi tiết các Volume (Vol 1-8)
├── chapters/                         <-- Bản thảo 8 Volume (các file chương đơn lẻ)
├── scripts/                          <-- Script bảo trì, CI & Recompile tự động
│   ├── recompile_volumes.ps1         <-- Tự động ghép Full Volumes & Kiểm định Canon
│   └── volume_meta.json              <-- Metadata tiêu đề chuẩn 8 tập
├── templates/scene_template.md       <-- Biểu mẫu Scene & Sequel
├── README.md                         <-- Giới thiệu tác phẩm dành cho độc giả
├── DEVELOPMENT_NOTES.md              <-- Nhật ký phát triển & Kiểm toán canon
└── STUDIO_WORKFLOW.md                <-- Tài liệu này
```

---

## 🚀 Hệ Thống 6 Module AI Chuyên Biệt

Trong studio này, **bạn là Showrunner / Tác giả tối cao**, còn AI đóng vai trò là **Hội đồng Biên tập & Trợ lý Chấp bút**.

### 1. 🛡️ Bảo Vệ Canon & Tính Liên Tục (`arrchirio-canon`)
*Tra cứu `bible/canon_audit.md`, `bible/state.md`, `bible/mana_physics.md` để ngăn chặn tuyệt đối mâu thuẫn.*
* *"Kiểm tra canon phân cảnh này."*
* *"Đoạn này có vi phạm định luật bảo toàn $\Psi$ và tản nhiệt $\eta$ không?"*
* *"Kiểm tra lại trang bị và vết thương hiện tại của Dienne/Louisa trong `state.md`."*

### 2. 🎨 Văn Phong & Thanh Trừng AI Slop (`arrchirio-style`)
*Dựa trên `bible/style_profile.md` để gọt giũa câu chữ, khử văn mẫu dịch máy, đan xen nhịp câu và bảo toàn giọng thoại.*
* *"Gọt giũa đoạn văn này: khử các từ ngữ sáo rỗng thường thấy của AI (khẽ, lập tức, xé toạc, vĩ đại)."*
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

### 6. 🎨 Giám Đốc Mỹ Thuật & Tranh Minh Họa (`arrchirio-illustrator`)
*Khóa đặc điểm nhận diện nhân vật (Character Consistency), thiết kế bìa sách khổ 2:3, concept sheet, và xuất prompt tối ưu cho Midjourney v6/Niji, FLUX.1, SDXL.*
* *"Vẽ concept sheet toàn thân cho Dienne Everhart kèm 3 biểu cảm gương mặt."*
* *"Tạo prompt bìa sách cho Tập 1: Dienne cầm kiếm gỗ sồi giữa bão tuyết phương Bắc."*
* *"Tạo prompt đại cảnh 16:9 trận chiến Cánh Cửa Thứ Bảy với ma trận Asariën phát sáng."*

---

## ✍️ Nguyên Tắc Vàng Cho Showrunner & AI

1. **Khóa State (State Continuity):** Luôn cập nhật `bible/state.md` sau mỗi chương. Đây là mỏ neo giúp AI ghi nhớ chính xác trạng thái nhân vật, vết thương, đạo cụ và dòng thời gian.
2. **Quyền Quyết Định Thuộc Về Tác Giả:** Mọi sáng tạo mới của AI chỉ là bản đề xuất mang nhãn `[PROPOSAL]`. Chỉ khi tác giả phê duyệt, nội dung mới được hợp nhất vào Story Bible.
3. **Quy Tắc Recompile Độc Quyền:** Tuyệt đối không chỉnh sửa các tệp `VolumeX_Full.md` bằng tay. Mọi sửa đổi phải thực hiện trên các tệp chương riêng lẻ (`chXX.md`), sau đó chạy `scripts/recompile_volumes.ps1` để tự động biên dịch lại.
