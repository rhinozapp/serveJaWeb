exports.saveWaiter = function (req, res) {
    let mongoose = require('mongoose'),
        waiter = mongoose.model('waiter'),
        bcrypt = require('bcrypt'),
        salt = bcrypt.genSaltSync(10),
        reqWaiter = req.body.waiter,
        reqPlace = req.body.place;

    waiter.findOneAndUpdate({
        _id: mongoose.Types.ObjectId(reqWaiter._id)
    }, {
        placeID : mongoose.Types.ObjectId(reqPlace.id),
        name : reqWaiter.name,
        username : reqWaiter.username,
        password : bcrypt.hashSync('SERVEJA', salt)
    }, {
        multi : false,
        upsert : true,
        new : true
    }, function (data) {
        res.json({
            status: true,
            result : data
        });

    }, function(err) {
        logger.log('error', err);
        res.json({
            status: false
        });
    });
};
