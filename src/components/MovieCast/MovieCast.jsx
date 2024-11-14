import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast, imgBaseURL } from '../../movies-api';
import styles from './MovieCast.module.css';

const MovieCast = () => {
  const [movieCasts, setMovieCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieCastById = async movieId => {
      try {
        setIsLoading(true);
        const { cast } = await getMovieCast(movieId);
        setMovieCasts(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieCastById(movieId);
  }, [movieId]);

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <p>Wait a few moments. Loading...</p>}

      <ul className={styles.list}>
        {movieCasts.map(actor => {
          return (
            <li key={actor.id} className={styles.listItem}>
              {actor.profile_path ? (
                <img
                  src={`${imgBaseURL}${actor.profile_path}`}
                  alt={actor.name}
                  width={100}
                />
              ) : (
                <span className={styles.noFoto}>no foto</span>
              )}

              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieCast;
