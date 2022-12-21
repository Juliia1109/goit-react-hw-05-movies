import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import Cast from './pages/Cast/Cast';
import Reviews from './pages/Reviews/Reviews';
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Movies = lazy(() => import('./pages/Movies/Movies.jsx'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails.jsx'));

export const App = () => {
  return (
  <>
  <Layout />
  <Suspense fallback={<div>Loading...</div>}>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route index element={<Home/>} />
      <Route path='movies' element={<Movies/>} />
      <Route path='movies/:movieId' element={<MovieDetails/>} >
         <Route path='cast' element={<Cast />} />
         <Route path='reviews' element={<Reviews />} />
  </Route>
  <Route path="*" element={<Navigate to="/" />} />
  {/* <Route path="*" element={<Navigate to="/" />} /> */}
  </Routes>
  </Suspense>
  </>
  )
};
