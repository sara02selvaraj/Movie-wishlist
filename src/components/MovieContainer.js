import React from 'react'
import {BiPlusCircle} from 'react-icons/bi'

function MovieContainer({movie, watchList,handleAdd}) {

    return (
        <React.Fragment>
            <div className="movie-container">
               <div className="poster">
                   <img className="img-movie" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + ' poster'}/>
               </div>
               <div className="movie-info">
                   <h2>{movie.title}</h2>
                   <div className="movie-details">
                       <p>RELEASE DATE: {movie.release_date}</p>
                       <p>RATING: {movie.vote_average}</p>
                       {watchList && <p><button className="action-btn" onClick={() => handleAdd(movie)} id="watchlist-btn"><BiPlusCircle className='icon'/>WatchList</button></p>}
                   </div>
                   <p className="plot">{movie.overview}</p>
               </div>
           </div>
        </React.Fragment>
    )
}

export default MovieContainer