const express = require("express");
const router = express.Router();

const {addEvent, getAll, getBydId, updateEvent, deleteEventById} = require("../../controllers/event.controllers");
const {checkToken} = require("../../middleware/auth");

router.post("/", checkToken , addEvent);
router.get("/", checkToken , getAll);
router.get("/:eventId", checkToken , getBydId);
router.put("/:eventId", checkToken , updateEvent);
router.delete("/:eventId", checkToken , deleteEventById);

module.exports = router;
