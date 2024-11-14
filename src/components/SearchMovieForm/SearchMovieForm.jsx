import styles from './SearchMovieForm.module.css';
// import toast, { Toaster } from 'react-hot-toast';

const SearchMovieForm = ({ onSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const searchValue = evt.target.elements.searchValue.value.trim();

    // if (!searchValue) {
    //   toast.error('Enter a search term!');
    //   return;
    // }

    onSearch(searchValue);
    evt.target.reset();
  };

  return (
    // <header className={styles.header}>
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        name="searchValue"
        //   placeholder="Search images and photos"
        className={styles.input}
      />
      <button type="submit" className={styles.btn}>
        Search
      </button>
    </form>
    // {/* <Toaster position="top-right" /> */}
    // </header>
  );
};

export default SearchMovieForm;
