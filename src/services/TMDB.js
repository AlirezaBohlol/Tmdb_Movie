import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const apiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),
  endpoints: (builder) => ({
    //|Get Puplar Movies
    getMovies: builder.query({
      query: () => `movie/popular?page:${page}&api_key=${apiKey}`
    }),
  }),
});

export const { useGetMoviesQuery } = tmdbApi;
