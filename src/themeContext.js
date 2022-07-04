import React, { useState, useEffect } from "react"
import  { toast, Zoom } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const { Provider, Consumer } = React.createContext()


function ThemeContextProvider(props) {
  const [page, setPage] = useState("home")
  const [movies, setMovies] = useState([])

  const togglePage = () => {
    setPage((prevStat) => (prevStat === "wishlist" ? "home" : "wishlist"))
  }

  useEffect(() => {
    const items = JSON.parse(window.localStorage.getItem("items"))
    if (items) {
      setMovies(items)
    }
  }, [])

  const handleRemove = (movie) => {
    setMovies((prevStat) => {
      return prevStat.filter(movi => movi.id !== movie.id)
    })
  }
  const handleAdd = (movie) => {
    setMovies((prevStat) => {
      const isExist =  prevStat.find(movi => movie.id === movi.id)
      if(isExist) {
        toast.error('Already in Watchlist!', {
          position: "top-right",
          autoClose: 1000,
          transition: Zoom
        })
        return prevStat 
      }
      else {
        toast.success('Added to Watchlist!', {
          position: "top-right",
          autoClose: 1000,
          transition: Zoom
        })
        return [...prevStat, movie]
      }
    })
  }
  
  useEffect(() => {
    window.localStorage.setItem("items", JSON.stringify(movies))
  }, [movies])
  return (
    <Provider value={{ page, togglePage, handleAdd, handleRemove, movies }}>
      {props.children}
    </Provider>
  )
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer }
