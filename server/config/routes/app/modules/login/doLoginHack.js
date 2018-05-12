exports.doLoginHack = function (req, res) {
    let mongoose = require('mongoose'),
        userApp = mongoose.model('userApp'),
        jwt = require('jsonwebtoken'),
        token;

    userApp.find({ idFace : 'hack' }, function(err, user) {
        if (err){
            res.json({status : false});
        }else if(user.length === 0) {
            new userApp({
                emailFace: 'hack@hack.com',
                name : 'hack',
                photo : '158dmbw4pTgCxPLjelakbFiL.jpg',
                tokenFace : 'hack',
                idFace : 'hack'
            }).save().then(function (data) {
                token = jwt.sign({
                    id : data._id,
                    emailFace: data.email,
                    name : data.name,
                    photo : data.photo,
                    tokenFace : data.token,
                    idFace : data.idFace
                }, 'rhinoz');

                res.json({
                    token : token,
                    status : true
                });
            });
        }else{
            token = jwt.sign({
                id : user[0]._id,
                emailFace: 'hack@hack.com',
                name : 'hack',
                photo : '158dmbw4pTgCxPLjelakbFiL.jpg',
                tokenFace : 'hack',
                idFace : 'hack'
            }, 'rhinoz');

            userApp.update({
                _id : user[0]._id
            }, {
                emailFace: 'hack@hack.com',
                name : 'hack',
                photo : '158dmbw4pTgCxPLjelakbFiL.jpg',
                tokenFace : 'hack',
                idFace : 'hack'
            }, {
                multi : false
            }, function () {
                res.json({
                    token : token,
                    status : true
                });
            });
        }
    });

};