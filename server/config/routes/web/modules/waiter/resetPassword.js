exports.resetPassword = function (req, res) {
    let mongoose = require('mongoose'),
        bcrypt = require('bcrypt'),
        salt = bcrypt.genSaltSync(10),
        waiter = mongoose.model('waiter');

    waiter.update({
        _id : req.body._id
    }, {
        password : bcrypt.hashSync('SERVEJA', salt),
        resetPassword : true
    }, {
        multi : false
    }, function () {
        res.json({status : true});
    }, function () {
        res.json({status : false});
    });
};
