import React from "react";
import { BiPlusCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import MovieContainer from "./MovieContainer";
import { ThemeContextConsumer } from "./themeContext";

function Wishlist() {
  return (
    <React.Fragment>
      <ThemeContextConsumer>
        {(context) => (
          <div className="content">
            {context.movies.length > 0 ? (
              <React.Fragment>
                {context.movies.map((movie) => (
                  <MovieContainer key={movie.id} movie={movie} />
                ))}
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="empty">
                  <h3>your watchlist is looking a little empty...</h3>
                  <p className="dark-text">
                    <Link onClick={context.togglePage} to="/">
                      <BiPlusCircle className="icon" />
                      Lets add some movies!
                    </Link>
                  </p>
                </div>
              </React.Fragment>
            )}
          </div>
        )}
      </ThemeContextConsumer>
    </React.Fragment>
  );
}

export default Wishlist;
