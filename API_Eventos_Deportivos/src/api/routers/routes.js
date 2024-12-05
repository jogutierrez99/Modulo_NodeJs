const express = require("express");
const router = express.Router();

router.use("/users", require("./api_routes/user.routes"));

module.exports = router;