import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = '890e6435d81321294cc0d1d7d2db1fed';

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: (builder) => ({
    movies: builder.query({
      query: (type) => `/trending/${type}/week?api_key=${API_KEY}`,
    }),
    moviesById: builder.query({
        query: (id) => `/movie/${id}?api_key=${API_KEY}`,
    }),
    moviesTvById: builder.query({
        query: (id) => `/tv/${id}?api_key=${API_KEY}`,
    }),
    moviesTrailer: builder.query({
      query: (id) => `/movie/${id}/videos?api_key=${API_KEY}`,
    }),
    moviesDiscover: builder.query({
      query: (request) =>
        `/discover/${request.type}?api_key=${API_KEY}&region=${request.region}`,
    }),
    moviesType: builder.query({
      query: (type) => `/discover/${type}?api_key=${API_KEY}`,
    }),
    moviesPopular: builder.query({
      query: (type) => `/${type}/popular?api_key=${API_KEY}`,
    }),
    moviesTopRated: builder.query({
      query: (type) => `/${type}/top_rated?api_key=${API_KEY}`,
    }),
    moviesRecommendation: builder.query({
      query: (request) =>
        `/${request.type}/${request.id}/recommendations?api_key=${API_KEY}`,
    }),
  }),
  overrideExisting: false,
});

export const {
    useMoviesQuery,
    useMoviesByIdQuery,
    useMoviesTvByIdQuery,
    useMoviesTrailerQuery,
    useMoviesDiscoverQuery,
    useMoviesTypeQuery,
    useMoviesPopularQuery,
    useMoviesTopRatedQuery,
    useMoviesRecommendationQuery,
} = moviesApi;