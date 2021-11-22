import React, {useEffect, useState} from "react";
const MovieApiClient = () => {
    const [movies, setMovies] = useState([]);

    const [movie, setMovie] = useState({_id: (new Date()).getTime().toString(), title: '', stars: 2.5});
    //const [movie, setMovie] = useState({_id: Math.random()*500, title: '', stars: 2.5});
    useEffect(() =>
            fetch('http://localhost:4000/api/movies')
                .then(response => response.json())
                .then(movies => setMovies(movies))
        , []
    );

    const onMovieTitleChange = (event) => {
        console.log("onMovieTitleChange from client: ");
        console.log(movie.title);
        setMovie(
            {
                ...movie,
                title: event.target.value
            }
        );
    }

    const createMovieClickHandler = () =>
        //console.log("createMovieClickHandler from client: ");
        fetch('http://localhost:4000/api/movies', {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));



    const deleteMovie = (movie) =>
        //console.log("deleteMovie from client: ");
        fetch(`http://localhost:4000/api/movies/${movie._id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));

    const saveMovie = () =>
        //console.log("saveMovie from client: ");
        fetch(`http://localhost:4000/api/movies/${movie._id}`, {
            method: 'PUT',
            body: JSON.stringify(movie),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));

    return(
        <div>
            <h2>Movies</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        onClick={createMovieClickHandler}
                        className="btn btn-success float-end">
                        Create
                    </button>

                    <input className="form-control"
                           value={movie.title}
                           onChange={onMovieTitleChange}
                           style={{width: "70%"}}/>

                    <button
                        onClick={saveMovie}
                        className="btn btn-primary ms-2 float-end">
                        Save
                    </button>
                </li>
                {
                    movies.map((movie) =>
                        <li className="list-group-item"
                            key={movie._id}>

                            {movie.title} {movie.stars}

                            <button onClick={() => setMovie(movie)}
                                    className="btn btn-primary float-end ms-2">
                                Edit
                            </button>


                            <button onClick={() => deleteMovie(movie)}
                                    className="btn btn-danger float-end">
                                Delete
                            </button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
};
export default MovieApiClient;