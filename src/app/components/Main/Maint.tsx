"use client";
import React, { FC, useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import { movieInfoRequest } from "@/API/movieInfoAPI";

const Main: FC = () => {
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    const fetchMovieInfo = async function () {
      const responseFromAPI = await movieInfoRequest("Batman");
      setMovie(responseFromAPI);
      console.log(responseFromAPI);
    };

    fetchMovieInfo();
  }, []);

  return (
    <div>
      <MovieList movie={movie} />
    </div>
  );
};

export default Main;
