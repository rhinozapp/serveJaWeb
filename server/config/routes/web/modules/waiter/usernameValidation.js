exports.usernameValidation = function(req, res) {
    let mongoose = require('mongoose'),
        waiter = mongoose.model('waiter'),
        logger = require('../../../../logger');

    waiter.findOne({ username: req.body.username })
        .then(function(user) {
            logger.log('info', user);
            if (user) {
                logger.log('info', 'Este usuário já existe');
                res.json({ status: false})
            } else {
                res.json({ status: true })
            }
        }, function(err) {
            logger.log('error', err);
            res.json({ status: false})
        })
};
