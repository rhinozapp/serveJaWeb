exports.deleteWaiter = function (req, res) {
    let mongoose = require('mongoose'),
        waiter = mongoose.model('waiter');

    waiter.remove({
        _id : req.body._id
    },{
        multi : false
    }, function () {
        res.json({status : true});
    }, function () {
        res.json({status : false});
    });
};
