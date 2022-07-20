import { Container } from "@mui/material";
import React from "react"; 
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useMoviesIdnQuery, useMoviesQuery, useMoviesTypeQuery } from "../services/moviesApi";
import 'react-multi-carousel/lib/styles.css';
import Banner from "../components/Banner/Banner";
import CarouselRow from "../components/CarouselRow/CarouselRow";

const MovieList = () => {
    const { data = [], isLoading, isError } = useMoviesQuery('all');
    const { data: dataIdn = [], isLoading: idnIsLoading, isError: idnIsError } = useMoviesIdnQuery({'type':'movie', 'region':'id'});
    const { data: movies = [], isLoading: moviesLoading, isError: moviesError } = useMoviesTypeQuery('movie');
    const { data: series = [], isLoading: seriesLoading, isError: seriesError } = useMoviesTypeQuery('tv');
    const trendingWeek = isLoading ? (
      <>Loading...</>
    ) : (
      <>
        <Banner movie={data.results[0]} />
        <CarouselRow data={data} title={"Weekly Trending"}/>
      </>
    );
    const indonesianTrend = idnIsLoading ? (
      <>Loading...</>
    ) : (
      <CarouselRow data={dataIdn} title={"Indonesian Trending"} makerank={true}  />
    );
    const movieList = moviesLoading ? (
      <>Loading...</>
    ) : (
      <CarouselRow data={movies} title={"Movies"} />
    );
    const seriesList = seriesLoading ? (
      <>Loading...</>
    ) : (
      <CarouselRow data={series} title={"Series"} />
    );
    return (
      <>
        <Navbar />
        <Container sx={{ minHeight: "150vh" }} maxWidth={false} disableGutters>
          {isError ? <>Oh no, there was an error</> : trendingWeek}
          {idnIsError ? <>Oh no, there was an error</> : indonesianTrend}
          {moviesError ? <>Oh no, there was an error</> : movieList}
          {seriesError ? <>Oh no, there was an error</> : seriesList}
        </Container>
        <Footer />
      </>
    );
}

export default MovieList;