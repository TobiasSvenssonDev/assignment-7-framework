import React, { useState, useRef, useEffect } from 'react';
import MovieList from './MovieList'
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = 'movieApp.movie'

function App() {
  const [movies, setMovies] = useState([])
  const movieTitleRef = useRef()

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedMovies) setMovies(storedMovies)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(movies))
  }, [movies])

  function toggleMovie(id) {
    const newMovies = [...movies]
    const movie = newMovies.find(todo => todo.id === id)
    movie.complete = !movie.complete
    setMovies(newMovies)

  }

  function handleAddMovie(e) {
    const name = movieTitleRef.current.value
    const id = movies.length > 0 ? movies[movies.length -1].id + 1 : 1;
    if (name === '') return
    setMovies(prevMovies => {
      return [...prevMovies, { id: id, name: name, complete: false}]
    })
    movieTitleRef.current.value = null
  }

  function handleClearMovies() {
    const newMovies = movies.filter(movie => !movie.complete)
    setMovies(newMovies)
  }

  return (
    //<> Ger oss ett element varav vi kan placera massvis med html-element.
    //eftersom vi inte kan returnera massa separata element från en funkt
    <> 
      
      <h1>Min filmsamling</h1>
      <form action="#" id="new-movie-form">
        <fieldset>
          <legend>Lägg till en film</legend>
          <div id="form-group">
          <input type="text" ref={movieTitleRef} id="title" class="form-control" placeholder="Ange titel här"></input>
            <label for="title">Titel:</label>
          </div>

          <div class="form-group">
            <label for="gradeInput">Betyg:</label>
            <select id="grade" class="form-control">
              <option value="" selected>Välj betyg här</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <button onClick={handleAddMovie} id="save-movies" class="btn btn-success">Spara film</button>
        </fieldset>
      </form>
      <hr />

      <h2>Mina Filmer</h2>
      <ul id="movie-list">
      
      </ul>

      <button id="order-alphabetic" class="btn btn-primary" style={{}}>
        Alphabetisk ordning
      </button>
      <button id="order-grade" class="btn btn-primary">
        Betygsordning
      </button>
      <MovieList movies={movies} toggleMovie={toggleMovie} />
    </>
  )
}
export default App;
