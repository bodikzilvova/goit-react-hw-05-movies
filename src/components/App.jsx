import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import FindMoviePage from 'pages/FindMoviePage';
import Homepage from 'pages/Homepage';
import MovieDetails from './MovieDetails/MovieDetails';
import CastDetails from './CastDetails/CastDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="movies" element={<FindMoviePage />}> 
        <Route path="query/:query" element={<FindMoviePage />}/>
        </Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>   
         <Route path="/movies/:movieId/cast" element={CastDetails} />
        {/* <Route path="/movies/:movieId/reviews" element={} />   */}
        </Route>
      </Route>
    </Routes>
  );
};
