//region Dependencies
let express = require('express'),
    app = express(),
    http = require('http').Server(app),
    appName = 'serveJa',
    dbUser = 'dev',
    dbPassword = 'dev001!';
//endregion

//region General Config
require('./server/config/config')(app, http);
require('./server/config/database/databaseConfig')('mongodb://localhost/' + appName);
/*require('./server/config/database/databaseConfig')('mongodb://'+ dbUser +':'+ dbPassword + '@ds149335.mlab.com:49335/heroku_gzm8rnrq');*/
//endregion

//region Start App
let port = process.env.PORT || 80;
http.listen(port);
exports = module.exports = app;
console.log('Server opened at port ' + port);
//endregion