const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/userModel')

// Đăng ký người dùng mới
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Kiểm tra nếu người dùng đã tồn tại trong database
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'Email is already registered' });
        }

        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10);

        // Tạo người dùng mới và lưu vào cơ sở dữ liệu
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        // Trả về thông báo thành công
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Đăng nhập người dùng
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Kiểm tra xem email có tồn tại trong database không
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Kiểm tra mật khẩu người dùng nhập vào
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Tạo JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET_KEY, // Khóa bí mật để mã hóa JWT
            { expiresIn: '1h' } // Thời gian hết hạn token (1 giờ)
        );

        // Trả về token cho người dùng
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const logoutUser = (req, res) => {
    try {
        // Ở phía server stateless, logout chỉ trả lời client để xóa token
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { registerUser, loginUser, logoutUser };