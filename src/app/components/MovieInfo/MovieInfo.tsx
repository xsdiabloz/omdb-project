import React, { FC, useState, useEffect } from "react";
import { movieInfoRequest } from "@/API/movieInfoAPI";
import { movieTypes } from "@/app/movieTypes/movieTypes";

interface IMovieInfoProps {
  movie: movieTypes;
}

const MovieInfo: FC<IMovieInfoProps> = ({ movie }) => {
  return (
    <div className="border p-4 m-4 rounded shadow hover:shadow-lg transition">
      {movie && (
        <>
          <img
            className="w-full rounded"
            src={movie.Poster}
            alt="movie poster"
          />
          <h1 className="text-center mt-2">{movie.Title}</h1>
          <p className="text-sm text-gray-500">{movie.Year}</p>
        </>
      )}
    </div>
  );
};

export default MovieInfo;
