---
name: arrchirio-illustrator
description: >-
  Hệ thống Thiết kế Hình ảnh & Tranh Minh họa Light Novel (Visual Art & Prompt Director) cho Arrchirio: The Seventh Gate.
  Chuyển hóa hồ sơ nhân vật trong bible/characters.md và bối cảnh thành prompt tối ưu cho Midjourney/Niji v6, FLUX.1,
  SDXL, và công cụ tạo ảnh Antigravity. Đảm bảo tính nhất quán ngoại hình (Character Consistency),
  bố cục bìa sách (Cover Layout), concept sheet, và đại cảnh chiến đấu ma pháp Asariën.
---

# Arrchirio Illustrator: Giám Đốc Mỹ Thuật & Tranh Minh Họa Light Novel

Skill này đảm nhận vai trò **Visual Art & Prompt Director** cho bộ tiểu thuyết *Arrchirio: The Seventh Gate*. Chịu trách nhiệm thiết kế concept nhân vật, bìa sách từng Volume, tranh minh họa nội dung (insert illustration) và đại cảnh chiến đấu ma đạo theo đúng tiêu chuẩn thẩm mỹ của dòng Light Novel đỉnh cao Nhật Bản (Wit Studio, CoMix Wave, Dengeki Bunko).

---

## 1. Visual Canon Anchor Registry (Bộ Khóa Nhận Diện Nhân Vật)

Để tránh tình trạng "mỗi tranh một mặt/màu tóc", skill bắt buộc phải áp dụng các **Anchor Tokens** chuẩn canon từ `bible/characters.md`:

| Nhân vật | Tuổi / Vóc dáng | Tóc & Mắt | Trang phục & Đạo cụ biểu tượng | Visual Keywords |
|:---|:---|:---|:---|:---|
| **Dienne Everhart** | 16 tuổi, 164cm, thanh mảnh nhưng dẻo dai, tư thế điềm tĩnh | Tóc **màu hạt dẻ** (chestnut brown) buộc thấp sau gáy; Mắt lam thẫm (*deep sapphire blue*) sắc lạnh | Áo len đen cổ lọ, áo choàng du hành màu tro, găng tay da hở ngón Asariën; **Thanh kiếm gỗ sồi sứt sẹo** đeo hông trái | `stoic expression, chestnut hair low ponytail, deep blue eyes, black turtleneck knit sweater, travel cloak, weathered oak practice sword, disciplined posture` |
| **Louisa** | 18 tuổi, 168cm, thể hình săn chắc, không mana ($\Psi = 0$) | Tóc đen ngắn tỉa layer, mắt đen láy sắc bén | Áo khoác bomber đen, găng tay cơ khí, bao chân chiến thuật; **Súng giảm thanh vonfram, còi bạc phá tần số, Đại Thái Đao cổ**; kẹo mút dâu | `athletic build, short layered jet-black hair, sharp gaze, black bomber jacket, tactical holster, silver frequency whistle, antique oversized nodachi` |
| **Diana Everhart** | **9.5–10 tuổi**, nhỏ nhắn, bước chân ballet thanh thoát | Mái tóc vàng óng ả (golden blonde) bồng bềnh; Mắt xanh lam hoàng gia | Váy xếp ly màu chàm/đen phong cách tiểu thư London; **Liễu kiếm bạc nạm sapphire** | `10 years old girl, petite, elegant ballet posture, wavy golden blonde hair, royal blue eyes, vintage pleated dress, slim silver rapier` |
| **Ryan** | 14 tuổi, 155cm, lanh lợi, tay lấm lem dầu mỡ | Tóc hung đỏ bù xù, mắt nâu to tròn | Kính bảo hộ Magitech kéo lên trán, yếm thợ máy, túi đồ nghề đầy ốc vít | `14yo boy, messy copper red hair, goggles on forehead, mechanic apron, oil smudges on cheek, brass tools, enthusiastic energetic expression` |
| **Soraya** | 18 tuổi, 170cm, vẻ đẹp sắc sảo phương Đông | Tóc đen dài gợn sóng cài chuỗi hạt vàng, mắt màu hổ phách (*amber*) | Khăn choàng lụa sa mạc đỏ thẫm viền vàng, áo choàng hở vai; **Vương trượng hồng ngọc** | `18yo young woman, tan skin, wavy black hair with golden hairpins, mesmerizing amber eyes, crimson silk desert robe, ornate ruby staff` |
| **Lucien Vale** | 17 tuổi, 172cm, thư sinh thanh lịch nhưng sắc sảo | Tóc nâu tối chải lệch, mắt xám tro sau cặp kính gọng tròn | Áo khoác dạ nâu sờn cổ, sổ cái tài chính bìa da, bàn tính đồng mini | `17yo young man, neat dark brown hair, round wireframe spectacles, cynical faint smirk, vintage wool trench coat, leather ledger book` |
| **Rhea Everwy** | Đóng băng sinh học tuổi 22 (thực tế 32 tuổi), cao lớn uy nghiêm | Mái tóc bạc **cắt ngắn ngang vai**, mắt xám băng giá; vết sẹo nhỏ gò má | Chiến giáp hoàng gia bạc khắc hoa văn Everhart, áo choàng rách bươm | `silver armor knight, short shoulder-length silver hair, small scar on cheekbone, resolute gaze, worn white cloak, heavy silver broadsword` |
| **Alden Everhart** | Trạc 40 tuổi (trông già hơn vì nếp nhăn & sương gió), uy nghiêm lạnh lùng | Tóc hoa râm chải ngược, vầng trán cao, mắt xám tro sâu thẳm | Áo măng-tô quân đội đen cài khuy thép; nhẫn đá obsidian **nhánh cây bạc bị bẻ gãy** | `40yo tall mature man, salt-and-pepper hair slicked back, stern wrinkled face, ash gray eyes, black military trench coat, obsidian signet ring` |

---

## 2. Các Chế Độ Sáng Tạo Hình Ảnh (Creation Modes)

### Mode A: Character Concept Sheet (Bảng Thiết Kế Nhân Vật Đa Góc)
- **Mục tiêu**: Tạo concept sheet toàn diện cho họa sĩ minh họa hoặc tài liệu tham chiếu.
- **Cấu trúc khung hình**:
  - `multiple views: full-body front view, three-quarter action view, back view`
  - `expression sheet: 3 facial close-ups (stoic neutral, combat focus, subtle emotional)`
  - `item close-ups: signature weapon and accessories on clean background`
- **Phong cách**: Anime lineart tinh tế, nền xám nhạt (`simple clean light gray background, character turnaround model sheet, design sketches, color palette swatches`).

### Mode B: Light Novel Book Cover (Bị Trí Bìa Dọc 2:3)
- **Mục tiêu**: Thiết kế bìa sách chính thức cho từng Volume.
- **Nguyên tắc vàng**:
  - Tỷ lệ: Khổ dọc `--ar 2:3` hoặc `--ar 9:16`.
  - **Negative Space**: Chừa 1/3 khoảng trống phía trên (bầu trời, sương mù, mảng màu gradient êm) để đặt Tiêu đề & Logo không bị rối.
  - Phối màu theo chủ đề từng Volume (Ví dụ Vol 1: Bão tuyết & tàn tích; Vol 6: Đêm sương mù London; Vol 8: Hào quang Điểm Kỳ Dị).

### Mode C: Action Key Visual & Asariën Magic Dynamics (Đại Cảnh Hoạt Họa 16:9)
- **Mục tiêu**: Tái hiện cao trào chiến đấu, va chạm năng lượng và ma trận hình học.
- **Quy chuẩn Hard Magic**:
  - Ma trận Asariën: Không vẽ luồng sáng trừu tượng vô định; phải có **vòng tròn đồng tâm, ký hiệu toán tử vi phân/tích phân, glyph hình học phát quang lam ngọc**.
  - Hiệu ứng vật lý: Sóng xung kích làm vỡ đá tảng, bụi mù, tia lửa kim loại, vành tản nhiệt đỏ rực vì nhiệt hao phí $Q$.

---

## 3. Multi-Engine Prompt Synthesizers (Bộ Chuyển Đổi Prompt)

### A. Định Dạng Midjourney v6 / Niji Journey v6
```text
/imagine prompt: [Subject & Anchors], [Action & Pose], [Environment & Background], [Lighting & Color Grading], [Art Style & Artist Influence], [Camera & Composition] --niji 6 --style expressive --ar [2:3 or 16:9] --s 200
```
*Ghi chú tham chiếu họa sĩ*: `art by Makoto Shinkai, Wit Studio, KyoAni, light novel official art style, clean lineart, vibrant cel shading`.

### B. Định Dạng FLUX.1 / DALL-E 3 / Antigravity `generate_image`
Dùng văn xuôi mô tả chi tiết, giàu tính thị giác, không dùng tag vụn vặt:
```text
An ultra-detailed cinematic Japanese light novel cover illustration. A 16-year-old girl named Dienne Everhart with calm, stoic sapphire-blue eyes and chestnut hair tied in a low ponytail stands firmly in a heavy northern blizzard. She wears a black turtleneck knitted sweater, a weathered gray travel cloak fluttering in the freezing wind, and fingerless leather gloves. In her left hand, she holds a weathered wooden oak practice sword pointing downward. Behind her, ancient stone castle ruins stand half-buried in deep snow, and faint cyan geometric Asariën magic circles float in the cold air. Dynamic low-angle shot, atmospheric snow flurry, volumetric cold blue and soft golden rim lighting, copy space at the upper third for book title. Masterpiece quality, crisp digital painting.
```

### C. Định Dạng Stable Diffusion XL (SDXL) / Danbooru Tagged
```text
Positive: (masterpiece:1.2), (best quality:1.2), (light novel illustration:1.3), official art, 1girl, dienne everhart, 16yo, stoic, chestnut hair, low ponytail, deep blue eyes, black turtleneck, travel cloak, holding wooden sword, snowy ruins, floating glowing cyan magic runes, geometric circles, blizzard, dynamic lighting, rim light, highly detailed background
Negative: (worst quality:1.4), (low quality:1.4), deformed, extra fingers, bad anatomy, mutated hands, blurry, logo, watermark, signature, text, out of frame
```

---

## 4. Quy Trình Phối Hợp với Showrunner

1. **Bước 1: Xác định Phân cảnh & Nhân vật**: Lấy đúng dữ liệu từ `bible/characters.md` và `chapters/`.
2. **Bước 2: Chọn Format**:
   - Bìa sách (`Cover - 2:3`)
   - Bảng nhân vật (`Character Sheet`)
   - Tranh nội dung (`Insert Illustration - B&W hoặc Color`)
   - Đại cảnh (`Key Visual - 16:9`)
3. **Bước 3: Xuất Bộ 3 Prompts Chuẩn Hóa**: Cung cấp cùng lúc 3 phiên bản (Midjourney/Niji, FLUX/Natural Language, và SDXL Tagged) để Showrunner dùng trên bất kỳ nền tảng nào.
4. **Bước 4: Tạo Ảnh Thử Nghiệm Trực Tiếp**: Khi được yêu cầu, gọi công cụ `generate_image` của hệ thống để xuất file ảnh mẫu vào thư mục artifacts.
