const userRouter = require('./userRouter');

const router = {
    run(req, res) {
        userRouter(req, res);
    }
}

module.exports = router;