exports.recoveryPasswordGetHash = function (req, res) {
    let mongoose = require('mongoose'),
        place = mongoose.model('place');

    place.find({ hashRecovery: req.body.hashRecovery }, function(err, user) {
        if (err){
            res.json({status : false});
        }else if(user.length === 0) {
            res.json({status : false});
        }else{
            res.json({status : true});
        }
    });
};
