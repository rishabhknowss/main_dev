const express = require('express');

const router = express.Router();

router.use("/user",userRouter);
router.use("/brand",brandRouter);


module.exports = router;