module.exports = function(app){

    app.get('/', function (req, res) {
        console.log('Api works');
        res.status(200).send('Api works');
    });
    
    app.get('*', function (req, res) {
        res.status(404).send('Pagina no encontrada');
    });
}