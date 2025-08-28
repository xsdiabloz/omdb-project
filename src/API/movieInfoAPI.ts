const apiKey = process.env.NEXT_PUBLIC_API_KEY;

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
