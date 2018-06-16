exports.getListWaiter = function (req, res) {
    let mongoose = require('mongoose'),
        waiter = mongoose.model('waiter');

    waiter.find({
        placeID : mongoose.Types.ObjectId(req.body.id)
    }, function(err, result) {
        if (err){
            res.json({status : false});
        }else if(result.length === 0) {
            res.json({status: false});
        }else{
            res.json({
                status: true,
                result : result
            })
        }
    })
};
