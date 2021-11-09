const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

require('/services/movies-service.js')(app);
app.listen(4000);

const saveMovie = (req, res) => {
    const newMovie = req.body;
    const movieId = req.params['mid'];
    movies = movies.map(movie =>
        movie._id === movieId ? newMovie : movie);
    res.json(movies);
}
app.put('/api/movies/:mid', saveMovie);

