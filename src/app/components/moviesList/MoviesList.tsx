import React, { FC } from "react";
import MovieInfo from "../movieInfo/MovieInfo";
import { movieTypes } from "@/app/movieTypes/movieTypes";

interface IMovieListProps {
  movies: movieTypes[];
}

const MoviesList: FC<IMovieListProps> = ({ movies }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {movies?.map((m, idx) => (
        <MovieInfo key={idx} movie={m} />
      ))}
    </div>
  );
};

export default MoviesList;
