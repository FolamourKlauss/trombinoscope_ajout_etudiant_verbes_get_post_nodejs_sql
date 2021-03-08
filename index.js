// va récupérer les valeurs qui sont dans le fichier .env et les mettre dans les variables d'environnement de l'application
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const router = require('./app/router');

app.use(express.json());
//génère un middleware qui vous mâche le taf de la récup des données POST, qui atterrissent dans `request.body` :heart_eyes: POST passe par le corps (=contenu de l’enveloppe) de la requête, qui restait vide jusqu’à présent
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', './app/views')

app.use(express.static('public'));
app.use(router);
// router -> controller -> dataRepository -> database

app.use(function(req, res) {
    res.status(404).send("Désoler cette page n'éxiste pas !");
});

app.listen(port, () => {
    console.log(`Server listen http://localhost:${port}`);
});