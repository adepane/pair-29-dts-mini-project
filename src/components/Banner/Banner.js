/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import "./style.css";
import { useMoviesTrailerQuery } from "../../services/moviesApi";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Banner = ({ movie }) => {
  const { data, isLoading } = useMoviesTrailerQuery(movie.id);
  const loadData = isLoading ? (
    <>Loading...</>
  ) : (
    `https://www.youtube.com/embed/${data.results[0].key}?controls=0&autoplay=1&mute=1&rel=0&loop=1`
  );
  return (
    <Paper
      className="paper"
      sx={{
        position: "relative",
        height: "650px",
      }}
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.4)100%) ,url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}) center center`,
        backgroundSize: "cover",
      }}
    >
      <div className="video-container">
        <iframe
          frameBorder="0"
          height="650"
          width="100%"
          src={loadData}
          autoPlay
          allow="autoplay"
        ></iframe>
        <div
          style={{
            fontSize: "25px",
            flexGrow: 1,
            position: "absolute",
            zIndex: "2",
            bottom: "20%",
            left: "5%",
          }}
        >
          <Button
            color="info"
            variant="outlined"
            sx={{ marginRight: "10px", textTransform: "capitalize" }}
          >
            <PlayArrowIcon /> Play
          </Button>
          <Button
            color="info"
            variant="outlined"
            sx={{ marginRight: "10px", textTransform: "capitalize" }}
          >
            <InfoOutlinedIcon /> Information
          </Button>
          <Button
            color="info"
            variant="outlined"
            sx={{ textTransform: "capitalize" }}
          >
            {movie.media_type}
          </Button>
          <Typography
            sx={{
              fontSize: "40px",
              color: "white",
              fontFamily: "TheHotling",
            }}
          >
            {movie.media_type === "movie" ? movie.title : movie.name}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default Banner;
