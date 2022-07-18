import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = '890e6435d81321294cc0d1d7d2db1fed';

export const moviesApi = createApi({
    reducerPath: "moviesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.themoviedb.org/3/",
    }),
    endpoints: (builder) => ({
        movies: builder.query({
            query: () => `/trending/all/week?api_key=${API_KEY}`
        }),
        
    })
});

export const {
    useMoviesQuery,
} = moviesApi;