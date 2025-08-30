"use client";
import React, { FC, useRef, useState } from "react";
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
        placeholder="Search movie..."
        className="border p-2 rounded m-2 bg-white"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
      <button
        className="mb-4 mt-4 bg-purple-500 cursor-pointer hover:bg-purple-700 text-white p-2 rounded transition"
        onClick={fetchMovieInfo}
      >
        Search
      </button>

      {loading ? <Spinner /> : <MovieList movies={movies} />}
    </div>
  );
};

export default Main;
