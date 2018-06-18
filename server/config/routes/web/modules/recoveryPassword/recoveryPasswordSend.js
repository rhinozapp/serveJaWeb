exports.recoveryPasswordSend = function (req, res) {
    let mongoose = require('mongoose'),
        place = mongoose.model('place'),
        bcrypt = require('bcrypt'),
        salt = bcrypt.genSaltSync(10),
        passwordHash = bcrypt.hashSync(req.body.email, salt),
        sendEmail = require('../../app/helpers/emailSender');

    place.find({ email: req.body.email }, function(err, user) {
        if (err){
            res.json({status : false});
        }else if(user.length === 0) {
            res.json({status : false});
        }else{

            place.update({
                email : req.body.email
            }, {
                hashRecovery : passwordHash.replace('-', '')
            }, {
                multi : false
            }, function () {
                sendEmail.emailSend(
                    'rhinozapp@gmail.com',
                    req.body.email,
                    'Recuperação de senha',
                    'Recupere sua senha <a href="localhost/recoveryPassword/'+passwordHash.replace('-', '')+'">aqui</a>',
                    'Recupere sua senha <a href="localhost/recoveryPassword/'+passwordHash.replace('-', '')+'">aqui</a>');

                res.json({
                    status : true
                });
            });
        }
    });
};
