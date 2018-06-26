exports.recoveryPassword = function (req, res) {
    let mongoose = require('mongoose'),
        place = mongoose.model('place'),
        bcrypt = require('bcrypt'),
        salt = bcrypt.genSaltSync(10);

    place.update({
        hashRecovery : req.body.hashRecovery
    }, {
        password : bcrypt.hashSync(req.body.password, salt),
        hashRecovery : null
    }, {
        multi : false
    }, function () {
        res.json({
            status : true
        });
    });
};
