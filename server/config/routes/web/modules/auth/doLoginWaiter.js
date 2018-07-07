exports.doLoginWaiter = function(req, res) {
    let mongoose = require('mongoose'),
        waiter = mongoose.model('waiter'),
        bcrypt = require('bcrypt'),
        salt = bcrypt.genSaltSync(10),
        jwt = require('jsonwebtoken'),
        token;

    waiter.findOne({ username: req.body.username }, function(err, user) {
        if (err) {
            res.json({ status: false, message : 'Algo deu errado! Tente novamente :(' });
        } else if (!user) {
            res.json({ status: false, message : 'Não foi encontrado nenhum usuário com este nome: ' + req.body.username});
        } else {

            bcrypt.compare(req.body.password, user.password, function (err, isMatch) {
                err ?
                    res.json({status: isMatch, resetPassword : false, message: 'Algo deu errado! Tente novamente :('}) :
                    !isMatch ?
                        res.json({status: isMatch, resetPassword : false, message: 'Usuário ou senha incorretos! Tente novamente'}) :
                        user.resetPassword ?
                            res.json({
                                status : true,
                                resetPassword : true,
                                message : 'Você digitou a senha padrão, entre com uma nova senha!'
                            }) :

                            waiter.update({
                                username: req.body.username
                            }, {
                                password: bcrypt.hashSync(req.body.password, salt),
                                resetPassword : false
                            }, {
                                multi : false
                            }, function () {
                                token = jwt.sign({
                                    id: user._id,
                                    username: user.username,
                                    name: user.name
                                }, 'rhinoz', { expiresIn: '12h' });

                                res.json({
                                    status: isMatch,
                                    resetPassword : false,
                                    token: token
                                });
                            })
            });
        }
    });
};
