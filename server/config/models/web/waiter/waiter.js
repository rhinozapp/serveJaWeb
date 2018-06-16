let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    objSchema = new mongoose.Schema({
        waiterID: Schema.ObjectId,
        placeID : { type: Schema.ObjectId, required: true, ref : 'place'},
        name : { type: String },
        username : { type: String },
        password : { type: String, required: true },
        resetPassword : { type : Boolean, default : true }
    });

module.exports = mongoose.model('waiter', objSchema);
