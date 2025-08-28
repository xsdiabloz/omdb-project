"use client";
import React, { FC, useEffect, useState } from "react";
import MovieList from "../moviesList/MoviesList";
import { movieInfoRequest } from "@/API/movieInfoAPI";
import { movieTypes } from "@/app/movieTypes/movieTypes";

const Main: FC = () => {
  const [movies, setMovies] = useState<movieTypes[]>([]);

  useEffect(() => {
    const fetchMovieInfo = async function () {
      const responseFromAPI = await movieInfoRequest("Halloween");
      if (responseFromAPI && responseFromAPI.Response === "True")
        setMovies([responseFromAPI]);
      else {
        console.warn("Фильм не найден");
      }
      console.log(responseFromAPI);
    };

    fetchMovieInfo();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Main;
