const Event = require("../models/event.model");

const addEvent = async (req, res) => {
    
    try {

        const newEvent = new Event(req.body);
        newEvent.organizator.push(req.user._id);
        const createdEvent = await newEvent.save();

        return res.json(createdEvent);
        
    } catch (error) {
        
    }

}

const getAll = async (req, res) => {

    try {
        const list = await Event.find();
        return res.json(list);

    } catch (error) {
        
    }
    
}

const getBydId = async (req, res) => {
    
    try {
        const findEvent = await Event.findById(req.params.eventId);
        return res.json(findEvent);

    } catch (error) {
        
    }
}

module.exports = {addEvent, getAll, getBydId}