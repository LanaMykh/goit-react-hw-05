import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList/MovieList';
import SearchMovieForm from '../components/SearchMovieForm/SearchMovieForm';
import { searchMovies } from '../movies-api';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchMovie = searchParams.get('query');

    if (!searchMovie) {
      return;
    }

    const fetchSearchMovie = async () => {
      try {
        setisLoading(true);
        const { results } = await searchMovies(searchMovie);
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setisLoading(false);
      }
    };

    fetchSearchMovie();
  }, [searchParams]);

  const handleSearch = searchMovie => {
    setSearchParams({ query: searchMovie });
  };

  return (
    <div>
      <SearchMovieForm onSearch={handleSearch} />

      {error && <p>{error}</p>}
      {isLoading && <p>Wait a few moments. Loading...</p>}

      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
