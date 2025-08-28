import React, { FC, useState, useEffect } from "react";
import { movieInfoRequest } from "@/API/movieInfoAPI";
import { movieTypes } from "@/app/movieTypes/movieTypes";

interface IMovieInfoProps {
  movie: movieTypes;
}

const MovieInfo: FC<IMovieInfoProps> = ({ movie }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      {movie && (
        <>
          <img className=" h-auto mb-2" src={movie.Poster} alt="movie poster" />
          <h1 className="font-bold text-lg">{movie.Title}</h1>
          <p className="text-sm text-gray-500">{movie.Year}</p>
          <p>{movie.Released}</p>
        </>
      )}
    </div>
  );
};

export default MovieInfo;
