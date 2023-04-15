const mysql = require('mysql');

// Create MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'your_database_name',
    connectionLimit: 10
});

// Define movie model
const Movie = {};

// Fget all
Movie.getAllMovies = (callback) => {
    const query = 'SELECT * FROM movies';
    pool.query(query, (err, rows) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
};

// search
Movie.getMovieById = (movieId, callback) => {
    const query = 'SELECT * FROM movies WHERE movie_id = ?';
    pool.query(query, [movieId], (err, rows) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows[0]);
        }
    });
};

// create
Movie.createMovie = (movie, callback) => {
    const query = 'INSERT INTO movies (movie_name, movie_year, movie_rank, movie_genre, actor_firstName, actor_lastName, actor_gender, actor_role, director_firstName, director_lastName, director_genre, director_genreProb) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const { movie_name, movie_year, movie_rank, movie_genre, actor_firstName, actor_lastName, actor_gender, actor_role, director_firstName, director_lastName, director_genre, director_genreProb } = movie;
    pool.query(query, [movie_name, movie_year, movie_rank, movie_genre, actor_firstName, actor_lastName, actor_gender, actor_role, director_firstName, director_lastName, director_genre, director_genreProb], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result.insertId);
        }
    });
};

// update
Movie.updateMovieById = (movieId, movie, callback) => {
    const query = 'UPDATE movies SET movie_name = ?, movie_year = ?, movie_rank = ?, movie_genre = ?, actor_firstName = ?, actor_lastName = ?, actor_gender = ?, actor_role = ?, director_firstName = ?, director_lastName = ?, director_genre = ?, director_genreProb = ? WHERE movie_id = ?';
    const { movie_name, movie_year, movie_rank, movie_genre, actor_firstName, actor_lastName, actor_gender, actor_role, director_firstName, director_lastName, director_genre, director_genreProb } = movie;
    pool.query(query, [movie_name, movie_year, movie_rank, movie_genre, actor_firstName, actor_lastName, actor_gender, actor_role, director_firstName, director_lastName, director_genre, director_genreProb, movieId], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result.affectedRows);
        }
    });
};

// delete
Movie.deleteMovieById = (movieId, callback) => {
    const query = 'DELETE FROM movies WHERE movie_id = ?';
    pool.query(query, [movieId], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result.affectedRows);
        }
    });
};

module.exports = Movie;
