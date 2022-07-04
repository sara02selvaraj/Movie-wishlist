import React, { useState } from "react"
import { FaFilm } from "react-icons/fa"
import MovieContainer from "./MovieContainer"
import { ThemeContextConsumer } from "../themeContext"

function Movies() {
  const [title, setTitle] = useState("")
  const [moviesData, setMoviesData] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = `https://api.themoviedb.org/3/search/movie?api_key=e72f91918c6261aea8263a6dba96c6ac&language=en-US&query=${title}&page=1&include_adult=false`
    try {
      const res = await fetch(url)
      const data = await res.json()
      setMoviesData(data.results)
      setTitle("")
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <React.Fragment>
      <div className="form-container">
        <form id="form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="movie-input"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="search for a movie"
            style={{ fontFamily: "Arial, FontAwesome" }}
            name="search"
          />
          <input type="submit" value="Search" />
        </form>
      </div>
      <div className="content">
        {moviesData.length > 0 ? (
          <React.Fragment>
            {
              <ThemeContextConsumer>
                {(context) =>
                  moviesData
                    .filter((movie) => movie.poster_path)
                    .map((movie) => (
                      <MovieContainer
                        handleAdd={context.handleAdd}
                        key={movie.id}
                        watchList={true}
                        movie={movie}
                      />
                    ))
                }
              </ThemeContextConsumer>
            }
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="empty movie">
              <h2>
                <FaFilm />
              </h2>
              <p>Start Exploring</p>
            </div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  )
}

export default Movies
