<!-- Tệp hướng dẫn sử dụng ứng dụng -->
Mô tả các tệp tin chính
<!-- /config -->
config/db.js: Chứa cấu hình và logic kết nối với MongoDB.
config/jwt.js: Chứa cấu hình JWT như secret key và thời gian hết hạn.

<!-- /controllers -->
controllers/authController.js: Chứa các hàm xử lý logic cho các yêu cầu liên quan đến đăng ký và đăng nhập người dùng.
controllers/taskController.js: Chứa các hàm xử lý logic cho các yêu cầu liên quan đến quản lý nhiệm vụ (tạo, chỉnh sửa, xóa, lọc, đánh dấu hoàn thành).

middleware/authMiddleware.js: Chứa middleware để xác thực JWT và kiểm tra quyền truy cập của người dùng.

models/user.js: Định nghĩa mô hình dữ liệu cho người dùng trong MongoDB.
models/task.js: Định nghĩa mô hình dữ liệu cho nhiệm vụ trong MongoDB.

routes/authRoutes.js: Định nghĩa các route liên quan đến đăng ký và đăng nhập.
routes/taskRoutes.js: Định nghĩa các route liên quan đến quản lý nhiệm vụ.

services/authService.js: Chứa các hàm dịch vụ liên quan đến việc tạo và xác thực JWT.
services/taskService.js: Chứa các hàm dịch vụ liên quan đến việc xử lý nhiệm vụ.

utils/response.js: Cung cấp các hàm tiện ích để tạo các phản hồi HTTP chuẩn.
utils/validators.js: Chứa các hàm tiện ích để kiểm tra và xác thực dữ liệu đầu vào.

app.js: Tệp chính khởi tạo ứng dụng, cấu hình server và kết nối các route với các controller.