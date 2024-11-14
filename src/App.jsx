import { Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import MoviesPage from './pages/MoviesPage';
// import NotFoundPage from './pages/NotFoundPage';
// import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
// import MovieCast from './components/MovieCast/MovieCast';
// import MovieReviews from './components/MovieReviews/MovieReviews';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const MoviesPage = lazy(() => import('./pages/MoviesPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage.jsx')
);
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast.jsx'));
const MovieReviews = lazy(() =>
  import('./components/MovieReviews/MovieReviews.jsx')
);

const App = () => {
  return (
    <div>
      <Navigation />

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="/movies/:movieId/cast" element={<MovieCast />} />
              <Route
                path="/movies/:movieId/reviews"
                element={<MovieReviews />}
              />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
