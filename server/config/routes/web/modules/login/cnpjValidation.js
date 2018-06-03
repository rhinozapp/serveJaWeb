exports.cnpjValidation = function(req, res) {
    let mongoose = require('mongoose'),
        place = mongoose.model('place'),
        logger = require('../../../../logger');

    console.log(req.body);

    place.findOne({ cnpj: req.body.cnpj })
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
            res.json({ status: false })
        })
};
