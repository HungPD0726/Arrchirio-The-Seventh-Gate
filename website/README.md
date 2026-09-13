# ARRCHIRIO: THE SEVENTH GATE — OFFICIAL WEBSITE

Trang web giới thiệu tác phẩm, triển lãm bộ tranh nhân vật retro anime và tra cứu dữ liệu 8 Volume của *Arrchirio: The Seventh Gate*.

---

## 🚀 Tính Năng Nổi Bật

1. **Triển lãm Nhân Vật (Interactive Character Gallery):** Trưng bày 7 nhân vật chính với ảnh chân dung vẽ theo phong cách retro 1960s anime màu nước & gouache, hỗ trợ Modal xem chi tiết chỉ số $\Psi$, vũ khí, xuất thân.
2. **Khám phá 8 Tập (Volume Journey Explorer):** Bộ chuyển đổi tab tương tác xem bối cảnh, số từ, trọng tâm và tóm tắt kịch bản của từng Volume.
3. **Mô phỏng Hard Magic Asariën (Magic Dynamic Simulator):** Widget tương tác trực tiếp công thức bảo toàn mana $\Psi_{\text{loss}} = (1 - \eta)\Psi_{\text{cung cấp}}$ và nhiệt phản chấn $Q_{\text{loss}} = \kappa \Psi_{\text{loss}}$.
4. **Chuẩn SEO & Responsive 100%:** Thiết kế co giãn hoàn hảo trên cả điện thoại di động, máy tính bảng và màn hình lớn.

---

## 🌐 Hướng Dẫn Đưa Lên Web (Deploying to the Web)

Website được xây dựng thuần HTML5, CSS3 và JavaScript hiện đại, **không cần cài đặt `node_modules` hay chạy lệnh build phức tạp**. Có thể đưa lên mạng ngay bằng các cách sau:

### Cách 1: Đưa lên GitHub Pages (Miễn phí qua Repository hiện tại)

1. Đẩy thư mục `website/` lên GitHub (đã có trong nhánh `main`).
2. Vào trang GitHub của Repository: `https://github.com/HungPD0726/Arrchirio-The-Seventh-Gate`.
3. Nhấp vào tab **Settings** $\to$ mục **Pages** ở cột bên trái.
4. Tại mục **Build and deployment**:
   - **Source**: Chọn `Deploy from a branch`.
   - **Branch**: Chọn `main` và thư mục `/website` (hoặc chuyển thành GitHub Action).
5. Nhấn **Save**. Sau khoảng 1 phút, trang web sẽ hoạt động trực tuyến tại:
   `https://hungpd0726.github.io/Arrchirio-The-Seventh-Gate/website/`

---

### Cách 2: Triển Khai Lên Vercel (Khuyên dùng - Nhanh nhất & Tên miền đẹp)

1. Truy cập [Vercel.com](https://vercel.com) và đăng nhập bằng tài khoản GitHub.
2. Nhấn **Add New Project** $\to$ chọn kho lưu trữ `Arrchirio-The-Seventh-Gate`.
3. Trong phần cấu hình dự án:
   - **Root Directory**: Nhấn *Edit* và chọn thư mục `website`.
4. Nhấn **Deploy**.
5. Sau 15 giây, bạn sẽ nhận được một đường link trực tuyến miễn phí có dạng:
   `https://arrchirio.vercel.app` (hoặc tên miền tùy chỉnh của bạn).

---

### Cách 3: Mở Xem Trực Tiếp Trên Máy Tính Cá Nhân (Local Preview)

- **Cách đơn giản nhất:** Nhấp đúp trực tiếp vào tệp `website/index.html` để mở trên Chrome, Edge, Safari hoặc Firefox.
- **Dùng Local Server (Python hoặc Live Server):**
  ```bash
  cd website
  python -m http.server 8080
  ```
  Sau đó mở trình duyệt tại: `http://localhost:8080`
