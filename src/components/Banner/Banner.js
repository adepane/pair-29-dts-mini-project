import React, { useEffect, useState } from "react";
import { Button, Paper, Typography } from "@mui/material";
import "./style.css";
import { useMoviesTrailerQuery } from "../../services/moviesApi";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";

const Banner = ({ movie }) => {
  
  const { data, isLoading } = useMoviesTrailerQuery({'type':'movie', 'id': movie.id});
  const [state, setState] = useState({
    mobileView: false,
  });
  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);
  const loadData =
    isLoading ? (
      <>Loading...</>
    ) : (
      (!mobileView) ?
        <iframe
        frameBorder="0"
        height="650"
        width="100%"
        src={`https://www.youtube.com/embed/${data?.results[0]?.key}?controls=0&autoplay=1&mute=1&rel=0&loop=1`}
        autoPlay
        allow="autoplay"
        title="video"
      ></iframe>
      : ""
    );
  return (
    <Paper
      className="paper"
      sx={{
        // position: "relative",
        height: "650px",
      }}
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.4)100%) ,url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}) center center`,
        backgroundSize: "cover",
      }}
    >
      <div className="video-container">
        {loadData}
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
            {movie.media_type}
          </Button>
          <Button
            color="info"
            variant="outlined"
            sx={{ textTransform: "capitalize" }}
          >
            <InfoOutlinedIcon /> More info
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
         
          <Link
            style={{
              marginRight: "10px",
              textTransform: "capitalize",
              border: "1px solid #fff",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              padding: "5px 15px",
              fontSize: "0.875rem",
              lineHeight: "1.75",
              fontFamily: "Roboto",
              minWidth: "64px",
              borderRadius: "4px",
              fontWeight: "500",
              letterSpacing: "0.02857em",
              color: "#fff",
              textDecoration: "none",
            }}
            to={`/${movie.media_type ? "movie" : "tv"}/${movie.id}`}
          >
            <PlayArrowIcon /> Play
          </Link>
        </div>
      </div>
    </Paper>
  );
};

export default Banner;
