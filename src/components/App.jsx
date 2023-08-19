import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './Layout/Layout';
import Container from './Container/Container';

const FindMoviePage = lazy(() => import('pages/FindMoviePage'));
const Homepage = lazy(() => import('pages/Homepage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const CastDetails = lazy(() => import('./CastDetails/CastDetails'));
const ReviewsDetails = lazy(() => import('./ReviewsDetails/ReviewsDetails'));

export const App = () => {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="movies" element={<FindMoviePage />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<CastDetails />} />
              <Route path="reviews" element={<ReviewsDetails />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};
