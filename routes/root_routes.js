module.exports = (app) => {
    app.get('/', function(req, res){
        var ddd = {sss:'sssss'};
        res.send(ddd);
    });
}