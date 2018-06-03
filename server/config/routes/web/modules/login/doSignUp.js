exports.doSignUp = function(req, res) {
    let mongoose = require('mongoose'),
        place = mongoose.model('place'),
        jwt = require('jsonwebtoken'),
        bcrypt = require('bcrypt'),
        salt = bcrypt.genSaltSync(10),
        logger = require('../../../../logger'),
        token;

    new place({
        email: req.body.place.email,
        password: bcrypt.hashSync(req.body.place.password, salt),
        namePlace: req.body.place.namePlace,
        cnpj: req.body.place.cnpj,
        zipCode: req.body.place.zipCode,
        street: req.body.place.street,
        number: req.body.place.number,
        complement: req.body.place.complement,
        neighborhood: req.body.place.neighborhood,
        city: req.body.place.city,
        state: req.body.place.state,
        loc: {
            'type': 'Point',
            coordinates: [req.body.place.loc[0], req.body.place.loc[1]]
        }
    }).save().then(function(user) {
        token = jwt.sign({
            id: user._id,
            email: user.email,
            name: user.name,
            logoPath: user.logoPath
        }, 'rhinoz', { expiresIn: '12h' });

        res.json({
            status: true,
            token: token
        });

    }, function(err) {
        console.log(err);
        logger.log('error', err);
        res.json({
            status: false
        });
    });
};
