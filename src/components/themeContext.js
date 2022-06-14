import React, { useState, useEffect } from "react";
const { Provider, Consumer } = React.createContext();

function ThemeContextProvider(props) {
  const [page, setPage] = useState("home");
  const [movies, setMovies] = useState([]);

  const togglePage = () => {
    setPage((prevStat) => (prevStat === "wishlist" ? "home" : "wishlist"));
  };

  useEffect(() => {
    const items = JSON.parse(window.localStorage.getItem("items"));
    if (items) {
      setMovies(items);
    }
  }, []);

  const handleAdd = (movie) => {
    setMovies((prevStat) => [...prevStat, movie]);
  };
  useEffect(() => {
    window.localStorage.setItem("items", JSON.stringify(movies));
  }, [movies]);

  console.log(movies);
  return (
    <Provider value={{ page, togglePage, handleAdd, movies }}>
      {props.children}
    </Provider>
  );
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
