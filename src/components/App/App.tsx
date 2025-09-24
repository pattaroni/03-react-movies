import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { fetchMovies } from "../../services/movieService";
import type { Movie } from "../../types/movie";
import toast, { Toaster } from "react-hot-toast";
import MovieGrid from "../MovieGrid/MovieGrid";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleMovies = async (query: string) => {
    try {
      const data = await fetchMovies(query);
      if (data.length === 0) {
        toast.error("No movies found for your request.");
        return;
      }
      setMovies(data);
    } catch (error) {
      toast.error("Error fetching movies");
      console.log(error);
    }
  };
  return (
    <>
      <SearchBar onSubmit={handleMovies} />
      <Toaster
        position="top-center"
        toastOptions={{
          className: "",
          duration: 1000,
          removeDelay: 1000,
        }}
      />
      <MovieGrid movies={movies} />
    </>
  );
}

export default App;
