# ARRCHIRIO: THE SEVENTH GATE (Cánh Cửa Thứ Bảy)
### Official Novel Studio Workspace

Chào mừng bạn đến với không gian sáng tác tác phẩm Light Novel **ARRCHIRIO: THE SEVENTH GATE**.

---

## 📁 Cấu Trúc Dự Án Hoàn Chỉnh

```text
mylightnovel/
├── .agents/skills/novel-craft/   <-- Custom Skill AI cố vấn & sáng tác truyện
├── bible/                        <-- Hệ thống Story Bible chuẩn mực
│   ├── world.md                  <-- Thiết lập thế giới & Trục du hành thành phố
│   ├── places.md                 <-- Địa lý 15 thành phố & kỳ quan ma thuật (9 trục chuẩn mực)
│   ├── species.md                <-- 7 chủng tộc (Human, Lunar Elves, Midgogant, Sky Kin...)
│   ├── characters.md             <-- Hồ sơ nhân vật (Dienne, Louisa, Ryan, Soraya, Lucien, Diana, Rhea...)
│   ├── Merlin.md                 <-- Canon về Merlin, Paradox & Gate 7
│   ├── magic.md                  <-- Triết lý & hệ thống ma thuật tổng quan
│   ├── mana_physics.md           <-- Động lực học Mana & Toán học ma pháp (3 Định luật Merlin)
│   ├── asarien_codex.md           <-- Ngôn ngữ cổ Asariën, ngữ pháp 4 pha & thần chú
│   ├── magic_appendix.md         <-- Phụ lục xuất bản (Ký hiệu ma pháp trận, 5 ví dụ)
│   ├── canon_audit.md            <-- Kiểm định & Khóa Canon (Audit mâu thuẫn & Hard Magic)
│   └── state.md                  <-- Trạng thái cốt truyện (Post-Vol 5 Tracker)
├── outline/                      <-- Dàn ý chi tiết các Volume
│   ├── master_plot.md            <-- Cốt truyện tổng thể & lộ trình tương lai (Vol 1-7)
│   ├── volume_1.md               <-- Dàn ý Tập 1 (Công chúa mất đi vương quốc)
│   ├── volume_2.md               <-- Dàn ý Tập 2 (Những thành phố không có trên bản đồ)
│   ├── volume_3.md               <-- Dàn ý Tập 3 (Thế giới không có phép thuật)
│   ├── volume_4.md               <-- Dàn ý Tập 4 (Những tàn tích của Arrchirio)
│   ├── volume_5.md               <-- Dàn ý Tập 5 (Tiếng vang từ biên cương)
│   └── volume_6.md               <-- Dàn ý Tập 6 (Reverse London & Bức điện Diana)
├── chapters/
│   ├── vol1/                     <-- Bản thảo Tập 1 (Đã hoàn thành 100% - 122 KB)
│   │   ├── Volume1_Full.md
│   │   ├── prologue.md -> ch10.md
│   │   └── epilogue.md
│   ├── vol2/                     <-- Bản thảo Tập 2 (Đã hoàn thành 100% - 66 KB)
│   │   ├── Volume2_Full.md
│   │   ├── prologue.md -> ch10.md
│   │   └── epilogue.md
│   ├── vol3/                     <-- Bản thảo Tập 3 (Đã hoàn thành 100% Webnovel - 176 KB)
│   │   ├── Volume3_Full.md
│   │   ├── prologue.md -> ch14.md
│   │   └── epilogue.md
│   ├── vol4/                     <-- Bản thảo Tập 4 (Đã hoàn thành 100% Webnovel - 172 KB)
│   │   ├── Volume4_Full.md
│   │   ├── prologue.md -> ch14.md
│   │   └── epilogue.md
│   ├── vol5/                     <-- Bản thảo Tập 5 (Đã hoàn thành 100% Webnovel - 193 KB)
│   │   ├── Volume5_Full.md
│   │   ├── prologue.md -> ch14.md
│   │   └── epilogue.md
│   └── vol6/                     <-- Bản thảo Tập 6: Dạ Vũ Trong Sương Mù (Đang sáng tác)
│       └── prologue.md           <-- Khúc dạ vũ bên dòng sông Thames (Mới nhất)
├── templates/scene_template.md   <-- Biểu mẫu Scene & Sequel
└── README.md                     <-- Hướng dẫn này
```

---

## 🚀 Cách Sử Dụng Với Trợ Lý AI (Novel-Craft Skill)

Trợ lý AI trong IDE đã được trang bị **Skill `novel-craft`**. Dưới đây là những câu lệnh mẫu bạn có thể dùng trong khung chat bất cứ lúc nào:

### 1. Xây Dựng Thế Giới & Nhân Vật
* *"Hãy giúp tôi hoàn thiện hệ thống phép thuật trong `bible/world.md` theo hướng ma đạo cơ khí."*
* *"Tôi muốn tạo một nhân vật nữ phản diện có lý tưởng chính đáng, hãy gợi ý vào `bible/characters.md`."*
* *"Phỏng vấn nhân vật chính của tôi để làm rõ động cơ nội tâm."*

### 2. Lập Dàn Ý & Phân Cảnh (Beat Sheet)
* *"Dựa vào `outline/volume_1.md`, hãy lên chi tiết phân cảnh 3 beat cho Chương 1."*
* *"Tôi muốn chương 3 có một cú twist bất ngờ về người đồng hành, hãy gợi ý kịch bản."*

### 3. Chấp Bút & Viết Văn (Drafting)
* *"Hãy viết chi tiết phân cảnh 1 của Chương 1 theo nguyên tắc Show, Don't Tell, chú ý miêu tả ngũ quan và cảm giác ngột ngạt."*
* *"Hãy viết đoạn đối thoại giữa Main và Kiếm sư trưởng, giữ đúng cách xưng hô trong `bible/characters.md`."*

### 4. Bắt Sạn Logic & Cập Nhật State (Audit & Continuity)
* *"Hãy đọc lại `chapters/vol1/ch01_draft.md` và bắt các lỗi logic mâu thuẫn với `bible/world.md` và `bible/state.md`."*
* *"Chương 1 đã xong, hãy tóm tắt những thay đổi về trang bị, quan hệ và vết thương rồi cập nhật vào `bible/state.md`."*

### 5. Gọt Giũa Văn Phong (Anti-AI Polish)
* *"Hãy biên tập lại đoạn văn này: khử các từ sáo rỗng thường thấy của AI, đan xen câu ngắn dồn dập cho cảnh cận chiến."*

---

## ✍️ Lưu Ý Dành Cho Tác Giả

1. **Chống quên chi tiết (Context Drift)**: Luôn cập nhật `bible/state.md` sau khi kết thúc một chương. Đây là "bí quyết" giúp AI không bao giờ bị quên hoặc viết mâu thuẫn với các chương trước.
2. **Quyền quyết định thuộc về bạn**: AI là trợ lý đồng hành (Co-pilot). Bạn có thể chỉnh sửa trực tiếp bất kỳ tệp nào trong `bible/` hoặc `chapters/` theo ý muốn.
