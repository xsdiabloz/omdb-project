import React, { FC, useState, useEffect } from "react";
import { movieInfoRequest } from "@/API/movieInfoAPI";

const MovieInfo: FC = () => {
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    const fetchMovieInfo = async function () {
      const responseFromAPI = await movieInfoRequest("Batman");
      setMovie(responseFromAPI);
      console.log(responseFromAPI);
    };

    fetchMovieInfo();
  }, []);

  return <div>{movie && <h1>{movie.Title}</h1>}</div>;
};

export default MovieInfo;
