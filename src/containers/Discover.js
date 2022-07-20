import { Container } from "@mui/material";
import React from "react"; 
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useMoviesIdnQuery, useMoviesPopularQuery, useMoviesQuery, useMoviesTopRatedQuery } from "../services/moviesApi";
import 'react-multi-carousel/lib/styles.css';
import CarouselRow from "../components/CarouselRow/CarouselRow";

const Discover = (props) => {
    const { data = [], isLoading, isError } = useMoviesQuery(props.data);
    const { data: dataIdn = [], isLoading: idnIsLoading, isError: idnIsError } = useMoviesIdnQuery({'type':props.data, 'region':'id'});
    const { data: topRated = [], isLoading: topRatedLoading, isError: topRatedError } = useMoviesTopRatedQuery(props.data);
    const { data: popular = [], isLoading: popularLoading, isError: popularError } = useMoviesPopularQuery(props.data);
    const trendingWeek = isLoading ? (
      <>Loading...</>
    ) : (
      <>
        <CarouselRow data={data} title={"Weekly Trending"}/>
      </>
    );
    const indonesianTrend = idnIsLoading ? (
      <>Loading...</>
    ) : (
      <CarouselRow data={dataIdn} title={"Indonesian Trending"} makerank={true} />
    );
    const topRatedList = topRatedLoading ? (
      <>Loading...</>
    ) : (
      <CarouselRow data={topRated} title={"Top Rated"} />
    );
    const popularList = popularLoading ? (
      <>Loading...</>
    ) : (
      <CarouselRow data={popular} title={"Popular"} />
    );
    return (
      <>
        <Navbar />
        <Container
          sx={{ minHeight: "120vh", marginTop: "18vh" }}
          maxWidth={false}
          disableGutters
        >
          {isError ? <>Oh no, there was an error</> : trendingWeek}
          {idnIsError ? <>Oh no, there was an error</> : indonesianTrend}
          {topRatedError ? <>Oh no, there was an error</> : topRatedList}
          {popularError ? <>Oh no, there was an error</> : popularList}
        </Container>
        <Footer />
      </>
    );
}

export default Discover;