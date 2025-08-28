import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const movieInfoRequest = async function (title: string) {
  try {
    const url = `http://www.omdbapi.com/?t=${encodeURIComponent(
      title
    )}&apikey=${apiKey}`;
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
