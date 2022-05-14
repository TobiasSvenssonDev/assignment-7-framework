import React, { useState, useRef, useEffect } from "react";
import Movie from "./Movie";
import SortingButtons from "./SortingButtons";

export default function MovieList() {
    const [movies, setMovies] = useState([]);
    const titleRef = useRef();
    const ratingRef = useRef();

    useEffect(() => {
        const storedMovies = JSON.parse(localStorage.getItem('movies'))
        if (storedMovies) setMovies(storedMovies)
    }, []);

    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movies));
    }, [movies]);

    function addMovie(event) {
        /*
        Lägger till ett filmobjekt i movies-listan genom setMovies
        TODO - lägg till validering och spara till localStorage
        */
        let validation = true;       

        if (titleRef.current.value == "" || ratingRef.current.value == "") {
            alert("Ange både titel och betyg")
            validation = false;
        };

        if (validation) {
            const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
            setMovies([...movies, {
                id: newId,
                title: titleRef.current.value,
                rating: ratingRef.current.value
            }]);

            titleRef.current.value = ""
            ratingRef.current.value = ""
        };
    }

    function deleteMovie(id) {
        setMovies(movies.filter((item) => item.id !== id));
    }

    return (
        <div>
            <fieldset>
                <input className="form-control" placeholder="Titel här..." ref={titleRef}></input>
                <select className="form-control" ref={ratingRef}>
                    <option defaultValue={""}>Välj betyg här</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button className="form-control btn btn-success" onClick={addMovie}>Spara film</button>
            </fieldset>

            <h1>Inlagda filmer</h1>
            <ul className="list-group">
                {movies.map(movie => <Movie key={movie.id} item={movie} deleteMovie={deleteMovie} />)}
            </ul>
            <SortingButtons />


        </div>
    )
};