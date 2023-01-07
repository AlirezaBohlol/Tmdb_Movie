import React from "react";
import { useGetMoviesQuery } from "./../../services/TMDB";

function Movie() {

    const { data } = useGetMoviesQuery();
    console.log(data)

    return (
        <div>Movie</div>
    )
}

export default Movie