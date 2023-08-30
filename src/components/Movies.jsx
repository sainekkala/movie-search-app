import React from "react";

function Movies (props) {
    const FavouriteComponent = props.favouriteComponent;
    return (
        <>
        {props.movies.map((film, index) => {
            return (
                <div className="image-container d-flex justify-content-start m-3 col" key={index}>
                    <img src={film.Poster} alt="movie" />
                    <div
                    onClick={() => props.handlefavClick(film)}
                    className="overlay d-flex align-items-center justify-content-center"
                    >
                        <FavouriteComponent />
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default Movies;