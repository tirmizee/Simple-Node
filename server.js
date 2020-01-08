const app =  require('./app');

const port = process.env.port || 8081;

const server = app.listen(port, () => {
    var host = server.address().address;
    console.log("Application Run : http://%s:%s, dir : %s", host, port,__dirname);
});
