import React from "react";
import { useLocation } from "react-router-dom";

const DetailMovie = () => {
    const movie = useLocation();
    const movieId = movie.pathname.split("/")[2];
    // const { data = [], isLoading, isError } = useMoviesId(movieId);

    return(
        <>
            this is the DetailMovie
        </>
    )
}

export default DetailMovie;