import { useEffect, useState } from "react";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const KEY = "53751975";

  useEffect(
    function () {
      // cleaning data fetched
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          // set preloader
          setIsLoading(true);

          // reset errors
          setError("");

          // fetch API
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          // failed fetch, throw an error
          if (!res.ok) throw new Error("Failed to fetch, Please Try Again");

          // assign fetched results
          const data = await res.json();

          // results not found, throw an error
          if (data.Response === "False") throw new Error("Movie Not Found!");

          // input results into movie state
          setMovies(data.Search);

          // reset errors
          setError("");
        } catch (err) {
          /* Set the error message into a State */
          if (err.message !== "The user aborted a request.") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      // empty query
      if (!query.length) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      // cleaning asyncData
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
