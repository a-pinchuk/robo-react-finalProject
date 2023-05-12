import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';
import FavoriteMovies from 'pages/FavoriteMovies/FavoriteMovies';

const Cast = lazy(() => import('pages/Cast/Cast'));
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const FilterGenres = lazy(() => import('pages/FilterGenres/FilterGenres'));
const MoviesDetails = lazy(() => import('pages/MoviesDetails/MoviesDetails'));
const Reviews = lazy(() => import('pages/Reviews'));
const Layout = lazy(() => import('./Layout/Layout'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/filterGenres" element={<FilterGenres />} />
            <Route path="/favoriteMovies" element={<FavoriteMovies />} />
            <Route path="/movies/:movieId" element={<MoviesDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>

          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </Suspense>
    </>
  );
};
