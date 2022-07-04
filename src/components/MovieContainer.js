import React from 'react'
import {BiPlusCircle, BiMinusCircle} from 'react-icons/bi'
import { ToastContainer, toast } from "react-toastify"

function MovieContainer({movie, watchList,handleAdd, handleRemove}) {

    return (
        <React.Fragment>
            <div className="movie-container">
            <ToastContainer />
               <div className="poster">
                   <img className="img-movie" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + ' poster'}/>
               </div>
               <div className="movie-info">
                   <h2>{movie.title}</h2>
                   <div className="movie-details">
                       <p>RELEASE DATE: {movie.release_date}</p>
                       <p>RATING: {movie.vote_average}</p>
                       {watchList ? <p className="btn"><button className="action-btn" onClick={() => handleAdd(movie)} ><BiPlusCircle className='icon'/>WatchList</button></p> : 
                       <p className="btn"><button className="action-btn" onClick={() => handleRemove(movie)} ><BiMinusCircle className='icon'/>Remove</button></p>}
                   </div>
                   <p className="plot">{movie.overview}</p>
               </div>
           </div>
        </React.Fragment>
    )
}

export default MovieContainer