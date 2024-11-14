import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../movies-api';
import MovieList from '../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const { results } = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {error && <p>{error}</p>}
      {isLoading && <p>Wait a few moments. Loading...</p>}

      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
