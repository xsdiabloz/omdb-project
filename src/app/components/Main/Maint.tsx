"use client";
import React, { FC, useState } from "react";
import MovieList from "../moviesList/MoviesList";
import { movieInfoRequest } from "@/API/movieInfoAPI";
import { movieTypes } from "@/app/movieTypes/movieTypes";

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
    <div className="flex flex-col justify-center items-center h-screen">
      <input
        className="border p-2 rounded mb-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
      <button className="mb-4" onClick={fetchMovieInfo}>
        Search
      </button>

      {!loading ? (
        <MovieList movies={movies} />
      ) : (
        <div className="grid place-items-center min-h-[80vh]">
          <div className="w-[65px] h-[65px] rounded-full border-5 border-gray-400 border-t-purple-700 animate-spin-slow"></div>
        </div>
      )}
    </div>
  );
};

export default Main;
