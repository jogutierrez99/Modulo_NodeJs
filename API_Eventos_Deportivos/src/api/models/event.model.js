const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {type: String, require:true},
    description: {type:String, require:true},
    date: {type:Date, require:true},
    localization: {type:String, require:true},
    typeOfSport: {type:String, require:true},
    users:[{type: Schema.Types.ObjectId, ref: "users"}]
},
{

});

const Event = mongoose.model("event", eventSchema);
module.exports = Event;