import React from "react"
import { Link } from "react-router-dom"
import { ThemeContextConsumer } from "../themeContext"

function Header() {
  return (
    <React.Fragment>
      <ThemeContextConsumer>
        {(context) => (
          <div className="header">
            <h1>
              {context.page === "wishlist" ? "My WishList" : "Find your film"}
            </h1>
            <nav className="nav-item">
              <ul>
                <li>
                  {context.page === "wishlist" ? (
                    <Link onClick={context.togglePage} to="/">
                      Search for Movies
                    </Link>
                  ) : (
                    <Link onClick={context.togglePage} to="/wishlist">
                      My WatchList
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        )}
      </ThemeContextConsumer>
    </React.Fragment>
  );
}

export default Header
