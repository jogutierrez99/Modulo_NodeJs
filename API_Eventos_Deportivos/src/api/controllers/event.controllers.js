const Event = require("../models/event.model");

const addEvent = async (req, res) => {
    
    try {

        const newEvent = new Event(req.body);
        newEvent.organizator.push(req.user._id);
        const createdEvent = await newEvent.save();

        return res.status(201).json(createdEvent);
        
    } catch (error) {
        return res.json({msg:"error", error});
    }

}

const getAll = async (req, res) => {

    try {
        const list = await Event.find().populate("organizator", "username");
        return res.status(200).json(list);

    } catch (error) {

        return res.json({msg:"error", error});
        
    }
    
}

const getBydId = async (req, res) => {
    
    try {
        const findEvent = await Event.findById(req.params.eventId).populate("organizator", "username");

        return res.status(200).json(findEvent);

    } catch (error) {

        return res.status(500).json({msg:"error", error});
        
    }
}

const updateEvent = async (req, res) => {

    try {
        const eventUpdate = await Event.findByIdAndUpdate(req.params.eventId, req.body, {new:true});
        return res.status(201).json(eventUpdate);

    } catch (error) {

        return res.json({msg:"error", error});
        
    }
    
}

const deleteEventById = async (req, res) => {

    try {
        const eventDelete = await Event.findByIdAndDelete(req.params.eventId).populate("organizator", "username");
        return res.status(200).json(eventDelete);
    } catch (error) {

        return res.json({msg:"error", error});
        
    }
}


const getByDate = async (req, res) => {

    try {
        
        const getList = await Event.find().sort({date:1}).populate("organizator", "username");
        return res.status(200).json(getList);

    } catch (error) {

        return res.json({msg:"error", error});
        
    }
    
}

const getTypeOfSport = async (req, res) => {

try {
    const list = await Event.find({typeOfSport:{$regex: req.query.type, $options:"i"}}).populate("organizator", "username");
    return res.status(200).json(list);

} catch (error) {

    return res.json({msg:"error", error});
    
}
    
}

const getDateFromTo = async (req, res) => {

    try {
        console.log(req.query.from)
        console.log(req.query.to)
        const getList = await Event.find({date: {$gte:req.query.from, $lte:req.query.to }}).sort({date:1}).populate("organizator", "username");
        return res.status(200).json(getList);

    } catch (error) {

        return res.json({msg:"error", error});
        
    }
    
}




module.exports = {addEvent, getAll, getBydId, updateEvent, deleteEventById, getByDate, getTypeOfSport, getDateFromTo}