"use client";
import React, { FC, useState } from "react";
import MovieList from "../moviesList/MoviesList";
import { movieInfoRequest } from "@/API/movieInfoAPI";
import { movieTypes } from "@/app/movieTypes/movieTypes";
import Spinner from "../spinner/Spinner";

const Main: FC = () => {
  const [movies, setMovies] = useState<movieTypes[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMovieInfo = async () => {
    if (!query) return;
    setLoading(true);
    const responseFromAPI = await movieInfoRequest(query);

    if (responseFromAPI.Response === "True" && responseFromAPI.Search) {
      setMovies(responseFromAPI.Search);
    } else {
      setMovies([]);
    }

    setLoading(false);
  };
  return (
    <div className="flex flex-col items-center h-screen">
      <input
        className="border p-2 rounded m-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
      <button
        className="bg-teal-500 hover:bg-teal-700 p-2 rounded cursor-pointer transition"
        onClick={fetchMovieInfo}
      >
        Search
      </button>

      {!loading ? <MovieList movies={movies} /> : <Spinner />}
    </div>
  );
};

export default Main;
