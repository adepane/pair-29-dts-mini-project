import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
import CarouselRow from "../components/CarouselRow/CarouselRow";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Player from "../components/Player/Player";
import {
  useMoviesRecommendationQuery,
  useMoviesTvByIdQuery,
} from "../services/moviesApi";

const DetailTv = () => {
    const movie = useParams();
    const { data = [], isLoading, isError } = useMoviesTvByIdQuery(movie.id);
    const {
      data: recommendation = [],
      isLoading: recomemendationLoading,
      isError: recommendationError,
    } = useMoviesRecommendationQuery({ 'type': 'tv', id: movie.id });

    const recommendationList = recomemendationLoading ? (
      <>Loading...</>
    ) : (
      <>
        <CarouselRow data={recommendation} title={"Recommendation for you"} />
      </>
    );
    return (
      <>
        <Navbar />
        <div
          style={{
            marginTop: "11vh",
          }}
        >
          <Player type="tv" id={movie.id} />
          <Container sx={{ margin: "10vh 0" }} maxWidth={false} disableGutters>
            {recommendationError ? (
              <>Oh no, there was an error</>
            ) : (
              recommendationList
            )}
          </Container>
        </div>
        <Footer />
      </>
    );
}

export default DetailTv;