import { Container, Grid } from "@mui/material";
import React from "react"; 
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useMoviesQuery } from "../services/moviesApi";
import MovieCard from "../components/MovieCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import theme from "../themes/theme";

const MovieList = () => {
    const {data, error, isLoading } = useMoviesQuery();

    const loadData = isLoading ? <>Loading...</>
        : data.results.map(movie => (
            <MovieCard
                key={movie.id}
                id={movie.id}
                rating={movie.rating}
                title={movie.title}
                img={movie.backdrop_path} 
            />
        ));

    return (
      <>
        <Navbar />
        <Container
          sx={{ minHeight: "60vh", marginTop: "13vh" }}
          maxWidth={false}
        >
          <Grid>
            <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
              <span
                style={{
                  padding: "0 10px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: '#c1c1c1',
                }}
              >
                Weekly Trending
              </span>
            </Grid>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass=""
              draggable={false}
              focusOnSelect={false}
              infinite={false}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={100}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 5,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
              }}
            >
              {error ? <>Oh no, there was an error</> : loadData}
            </Carousel>
          </Grid>
        </Container>
        <Footer />
      </>
    );
}

export default MovieList;