import axios from "axios";
import { movieResponse } from "@/app/movieTypes/movieTypes";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const movieInfoRequest = async (
  title: string
): Promise<movieResponse> => {
  const url = `http://www.omdbapi.com/?s=${encodeURIComponent(
    title
  )}&apikey=${apiKey}`;
  const { data } = await axios.get<movieResponse>(url);
  return data;
};
