import { Grid } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard";

const CarouselRow = ({ data, title, makerank = false, portrait = false}) => {
    const totalList = portrait ? 7 : 5;
    return (
      <Grid sx={{ padding: "10px 20px" }}>
        <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
          <span
            style={{
              padding: "0 10px",
              fontSize: "20px",
              fontWeight: "light",
              color: "white",
            }}
          >
            {title}
          </span>
        </Grid>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={true}
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
              items: totalList,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 600,
                min: 0,
              },
              items: 3,
              partialVisibilityGutter: 30,
            },
          }}
        >
          {data.results.map((movie, index) => (
            <MovieCard
              rank={index + 1}
              key={movie.id}
              id={movie.id}
              rating={movie.rating}
              title={movie.title}
              img={movie.backdrop_path}
              mediaType={movie.media_type}
              makerank={makerank}
              portrait={portrait}
            />
          ))}
        </Carousel>
      </Grid>
    );
}
export default CarouselRow;