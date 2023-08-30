import React, { useEffect, useState } from 'react';
import "./App.css";
import Movies from './components/movies';
import Joner from './components/Joner';
import Search from './components/Search';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

function App() {
  const [movie, setMovie] = useState([]);
  const [searchinput, setSearchInput] = useState("");
  const [favourites, setFavourites] = useState([]);
  
  const getData = async (searchinput) => {
    const url = `http://www.omdbapi.com/?s=${searchinput}&apikey=f241d2a6`;
    const response = await fetch (url);
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.Search) {
			setMovie(responseJson.Search);
		}
  }
 console.log (movie)
  useEffect (() => {
    getData(searchinput)
  },[searchinput]);

  useEffect (() => {
    const favmovies = JSON.parse(
      localStorage.getItem("fav-movies")
    );
    if (favmovies){
      setFavourites(favmovies);
    }
  },[])

  const saveToLocalStorage = (item) => {
    localStorage.setItem("fav-movies", JSON.stringify(item));
  }

  const addFavoritesMovie = (movie) => {
    const newfav = [...favourites, movie];
    setFavourites(newfav);
    saveToLocalStorage(newfav);
  }

  const removeFavouritesMovie = (movie) => {
    const newfav = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newfav);
    saveToLocalStorage(newfav);
  }

  return (
    <>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <Joner heading = "Movies" />
          <Search searchinput = {searchinput} setSearchInput = {setSearchInput} />
        </div>
        <div className="row">
        <Movies 
        movies = {movie}
        favouriteComponent = {AddFavourites}
        handlefavClick = {addFavoritesMovie}
        />
        </div>
        <div className='row d-flex align-items-center mt-4 mb-4'>
          <Joner heading= "Favourites"/>
        </div>
        <div className='row'>
          <Movies 
          movies = {favourites}
          favouriteComponent = {RemoveFavourites}
          handlefavClick = {removeFavouritesMovie}
          />
        </div>
      </div>
    </>
  )
}

export default App
