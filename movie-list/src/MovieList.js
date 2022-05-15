import React, { useState, useRef, useEffect } from "react";
import Movie from "./Movie";

export default function MovieList() {
    const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('movies')));
    const titleRef = useRef();
    const ratingRef = useRef();

    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movies));
    }, [movies])

    function addMovie(event) {
        /*
        Validerar formuläret och lägger till ett filmobjekt i movies-listan genom setMovies
        TODO renskriv HTML och lägg till stjärnor
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

    function sortAlpha(){
        let moviesAlpha = [...movies].sort((a, b) => a.title.localeCompare(b.title))
        setMovies(moviesAlpha)
    }

    function sortNum(){
        let moviesNum = [...movies].sort((a, b) => a.rating.localeCompare(b.rating))
        setMovies(moviesNum)
    }

    return (
        <div>
            <fieldset>
                <input className="form-control" placeholder="Titel här..." ref={titleRef}></input>
                <select className="form-control" ref={ratingRef}>
                    <option defaultValue={""} placeholder="Välj betyg här"></option>
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

            <button className="btn btn-lg btn-info m-3" onClick={sortAlpha}>Sort alpha</button>
            <button className="btn btn-lg btn-info m-3" onClick={sortNum}>Sort numerical</button>


        </div>
    )
};