//const texto = document.createElement('h5');
//texto.innerText = 'Ninguna Noticia Encontrada.';
const axios = require('axios');


function getNoticias(req, res){
    let tema = req.query.busqueda;
    const apiKey = '9f94e7b20311427eb42637fc3ec73545';
    const url = `https://newsapi.org/v2/everything?q=${tema}&apiKey=${apiKey}`;

    axios.get(url)
        .then((response) => {
            res.render('news', {news: response.data.articles, topic: tema});
    })
    .catch(error => {
        console.log(error);
        res.render('home');
    })
}

module.exports = {getNoticias};