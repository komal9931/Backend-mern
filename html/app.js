const tmdbapi = async () => {
  try {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-IN&page=1";
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(
        `Main movie fetch failed with status: ${response.status}`
      );
    }
e:2
r:1
s:2

    const data = await response.json();
    const movies = data.results;

    for (let movie of movies) {
      try {
        const videoRes = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
          options
        );

        if (!videoRes.ok) {
          throw new Error(
            `Failed to fetch trailer for movie ID ${movie.id}, status: ${videoRes.status}`
          );
        }

        const videoData = await videoRes.json();

        // Do something with movie & trailer...
      } catch (trailerError) {
        console.error("Error fetching trailer:", trailerError.message);
      }
    }
  } catch (err) {
    console.error("Error fetching now playing movies:", err.message);
  }
};

tmdbapi();
