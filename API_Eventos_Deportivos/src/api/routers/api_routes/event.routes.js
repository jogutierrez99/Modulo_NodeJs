const express = require("express");
const router = express.Router();

const {addEvent, getAll} = require("../../controllers/event.controllers");
const {checkToken} = require("../../middleware/auth");

router.post("/", checkToken , addEvent);
router.get("/", checkToken , getAll);


module.exports = router;
