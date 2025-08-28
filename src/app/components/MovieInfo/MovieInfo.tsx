import React, { FC, useState, useEffect } from "react";
import { movieInfoRequest } from "@/API/movieInfoAPI";

const MovieInfo: FC = () => {
  return (
    <div>
      {movie && (
        <>
          <img src={movie.Poster} alt="movie poster" />
          <h1>{movie.Title}</h1>
          <p>{movie.Year}</p>
          <p>{movie.Released}</p>
        </>
      )}
    </div>
  );
};

export default MovieInfo;
