const express = require('express');
const routes =  require('./routes')

const app = express();

routes(app);

const server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Application Run : http://%s:%s, dir : %s", host, port,__dirname);
});