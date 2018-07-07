exports.changePasswordAndDoLoginWaiter = function(req, res) {
    let mongoose = require('mongoose'),
        waiter = mongoose.model('waiter'),
        bcrypt = require('bcrypt'),
        salt = bcrypt.genSaltSync(10),
        jwt = require('jsonwebtoken');

        waiter.update({
            username: req.body.username
        }, {
            password: bcrypt.hashSync(req.body.password, salt),
            resetPassword : false
        }, {
            multi : false,
            new : true
        }, function (err, user) {
            err || !user ?
                res.json({ status: false, message : 'Algo deu errado! Tente novamente :(' }) :
                res.json({
                    status: true,
                    resetPassword : false,
                    token: jwt.sign({
                        id: user._id,
                        username: user.username,
                        name: user.name
                    }, 'rhinoz', { expiresIn: '12h' })
                });
        })
};
