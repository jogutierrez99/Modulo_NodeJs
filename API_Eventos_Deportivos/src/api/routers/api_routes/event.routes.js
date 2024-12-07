const express = require("express");
const router = express.Router();

const {addEvent, getAll, getBydId} = require("../../controllers/event.controllers");
const {checkToken} = require("../../middleware/auth");

router.post("/", checkToken , addEvent);
router.get("/", checkToken , getAll);
router.get("/:eventId", checkToken , getBydId);


module.exports = router;
