<!-- Tệp hướng dẫn sử dụng ứng dụng -->
Mô tả các tệp tin chính
<!-- /config -->
config/db.js: Chứa cấu hình và logic kết nối với MongoDB.
config/jwt.js: Chứa cấu hình JWT như secret key và thời gian hết hạn.

<!-- /controllers -->
controllers/authController.js: Chứa các hàm xử lý logic cho các yêu cầu liên quan đến đăng ký và đăng nhập người dùng.
controllers/taskController.js: Chứa các hàm xử lý logic cho các yêu cầu liên quan đến quản lý nhiệm vụ (tạo, chỉnh sửa, xóa, lọc, đánh dấu hoàn thành).

<!-- /middleware -->
middleware/authMiddleware.js: Chứa middleware để xác thực JWT và kiểm tra quyền truy cập của người dùng.

<!-- /models -->
models/user.js: Định nghĩa mô hình dữ liệu cho người dùng trong MongoDB.
models/task.js: Định nghĩa mô hình dữ liệu cho nhiệm vụ trong MongoDB.

<!-- /routes -->
routes/authRoutes.js: Định nghĩa các route liên quan đến đăng ký và đăng nhập.
routes/taskRoutes.js: Định nghĩa các route liên quan đến quản lý nhiệm vụ.

<!-- /service -->
services/authService.js: Chứa các hàm dịch vụ liên quan đến việc tạo và xác thực JWT.
services/taskService.js: Chứa các hàm dịch vụ liên quan đến việc xử lý nhiệm vụ.

<!-- /utils -->
utils/response.js: Cung cấp các hàm tiện ích để tạo các phản hồi HTTP chuẩn.
utils/validators.js: Chứa các hàm tiện ích để kiểm tra và xác thực dữ liệu đầu vào.

<!-- Khởi động server: -->
node app.js

<!-- Cài đặt phụ thuộc -->
npm install

<!-- Tạo file .env và cấu hình các biến môi trường: -->
MONGO_URL=mongodb://localhost:27017
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRATION=1h


