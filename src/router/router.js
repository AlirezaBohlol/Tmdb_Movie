import Movie from '../components/Movie/Movie';
import Actors from '../components/Actors/Actors';
import MovieInformation from '../components/MovieInformation/MovieInformation';
import Profile from '../components/Profile/Profile';

export default [
  {
    path: '/',
    element: <Movie />,
  },
  {
    path: '/movie/:id',
    element: <MovieInformation />,
  },
  {
    path: '/profile/:id',
    element: <Profile />,
  },
  {
    path: '/actors/:id',
    element: <Actors />,
  },
];
