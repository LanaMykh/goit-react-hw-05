import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById, imgBaseURL } from '../../movies-api';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [movieById, setMovieById] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieById = async movieId => {
      try {
        setIsLoading(true);
        const movieData = await getMovieById(movieId);
        setMovieById(movieData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieById(movieId);
  }, [movieId]);

  const location = useLocation();
  const backLinkHref = useRef(location.state ?? '/movies');

  return (
    <div className={styles.movieBox}>
      {error && <p>{error}</p>}
      {isLoading && <p>Wait a few moments. Loading...</p>}

      <Link to={backLinkHref.current}>&#8592; Go back</Link>
      <div className={styles.movieDetails}>
        {movieById.poster_path ? (
          <img
            src={`${imgBaseURL}${movieById.poster_path}`}
            alt={movieById.title}
            width={200}
          />
        ) : (
          <span className={styles.noFoto}>X</span>
        )}
        <div className={styles.movieDescr}>
          <h1>
            {movieById.title}{' '}
            {movieById.release_date
              ? `(${movieById.release_date.slice(0, 4)})`
              : ''}
          </h1>
          <p>
            User Score:{' '}
            {movieById.vote_average ? `${movieById.vote_average * 10} %` : ''}
          </p>
          <h3>Owerview</h3>
          <p>{movieById.overview}</p>
          <h3>Genres</h3>
          <p>
            {movieById.genres
              ? movieById.genres.map(genre => genre.name).join(', ')
              : ''}
          </p>
        </div>
      </div>
      <div className={styles.addInfo}>
        <h3>Additional information</h3>
        <ul className={styles.moreInfo}>
          <li className={styles.listMoreInfo}>
            <Link to="cast">Cast</Link>
          </li>
          <li className={styles.listMoreInfo}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
