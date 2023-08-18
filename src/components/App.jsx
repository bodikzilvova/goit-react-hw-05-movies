import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import FindMoviePage from 'pages/FindMoviePage';
import Homepage from 'pages/Homepage';
import MovieDetails from './MovieDetails/MovieDetails';
import CastDetails from './CastDetails/CastDetails';
import ReviewsDetails from './ReviewsDetails/ReviewsDetails';
import Container from './Container/Container';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="movies" element={<FindMoviePage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<CastDetails />} />
            <Route path="reviews" element={<ReviewsDetails />} />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
};
