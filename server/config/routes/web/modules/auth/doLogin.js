exports.doLogin = function(req, res) {
    let mongoose = require('mongoose'),
        place = mongoose.model('place'),
        bcrypt = require('bcrypt'),
        logger = require('../../../../logger'),
        jwt = require('jsonwebtoken'),
        token;

    place.find({ email: req.body.email }, function(err, user) {
        if (err) {
            res.json({ status: false, message : 'Algo deu errado! Tente novamente :(' });
        } else if (user.length === 0) {
            res.json({ status: false, message : 'Nenhum usuário criado com este E-mail :(' });
        } else {
            bcrypt.compare(req.body.password, user[0].password, function(err, isMatch) {
                if (err) {
                    res.json({status: isMatch, message: 'Algo deu errado! Tente novamente :('});
                }else if(!isMatch){
                    res.json({status: isMatch, message: 'Usuário ou senha incorretos! Tente novamente'});
                } else {
                    token = jwt.sign({
                        id: user[0]._id,
                        email: user[0].email,
                        name: user[0].name,
                        logoPath: user[0].logoPath
                    }, 'rhinoz', { expiresIn: '12h' });

                    res.json({
                        status: isMatch,
                        token: token
                });
                }
            });
        }
    });
};
