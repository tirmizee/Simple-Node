module.exports = (app) => {
    app.get('/user', function(req, res){
        var ddd = {user:'user'};
        res.send(ddd);
    });
}