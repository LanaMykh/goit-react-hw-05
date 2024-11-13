import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const buildCssClasses = ({ isActive }) =>
  clsx(styles.link, isActive && styles.active);

const Navigation = () => {
  return (
    <header>
      <NavLink className={buildCssClasses} to="/">
        Home
      </NavLink>
      <NavLink className={buildCssClasses} to="/movies">
        Movies
      </NavLink>
    </header>
  );
};

export default Navigation;
