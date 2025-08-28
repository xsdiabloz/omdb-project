//http://www.omdbapi.com/?apikey=http://www.omdbapi.com/?i=tt3896198&apikey=5e32b41b&

const apiKey = "5e32b41b";

export const movieInfoRequest = async function (title: string) {
  try {
    const url = `http://www.omdbapi.com/?t=${encodeURIComponent(
      title
    )}&apikey=${apiKey}`;
    const data = await fetch(url);
    const dataResponse = await data.json();
    return dataResponse;
  } catch (e) {
    console.log(e);
  }
};
