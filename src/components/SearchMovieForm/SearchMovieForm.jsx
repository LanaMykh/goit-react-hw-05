import styles from './SearchMovieForm.module.css';

const SearchMovieForm = ({ onSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const searchValue = evt.target.elements.searchMovie.value.trim();

    onSearch(searchValue);
    evt.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        name="searchMovie"
        className={styles.input}
      />
      <button type="submit" className={styles.btn}>
        Search
      </button>
    </form>
  );
};

export default SearchMovieForm;
