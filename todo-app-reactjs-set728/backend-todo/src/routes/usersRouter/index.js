const express = require('express')
const User = require('../../models/userModel')

const router = express.Router();

// 1. API tạo người dùng mới (POST /users)
router.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Kiểm tra dữ liệu đầu vào
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Vui lòng cung cấp đủ thông tin.' });
        }

        // Tạo người dùng mới
        const newUser = new User({ name, email, password });
        await newUser.save();

        // Trả về thông tin người dùng mới
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo người dùng.', error });
    }
});

// 2. API lấy danh sách tất cả người dùng (GET /users)
router.get('/', async (req, res) => {
    try {
        const users = await User.find(); // Lấy tất cả người dùng từ MongoDB
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi lấy danh sách người dùng.', error });
    }
});

// 3. API lấy thông tin một người dùng theo ID (GET /users/:id)
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id); // Tìm người dùng theo ID
        if (!user) {
            return res.status(404).json({ message: 'Người dùng không tồn tại.' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi lấy thông tin người dùng.', error });
    }
});

// 4. API cập nhật thông tin người dùng (PUT /users/:id)
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name, email, password },
            { new: true } // Trả về đối tượng người dùng đã được cập nhật
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'Người dùng không tồn tại.' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi cập nhật thông tin người dùng.', error });
    }
});

// 5. API xóa người dùng (DELETE /users/:id)
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: 'Người dùng không tồn tại.' });
        }

        res.status(200).json({ message: 'Người dùng đã được xóa thành công.', user: deletedUser });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi xóa người dùng.', error });
    }
});

module.exports = router;