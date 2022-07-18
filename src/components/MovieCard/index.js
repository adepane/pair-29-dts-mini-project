import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia } from "@mui/material";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ id, img, title, mediaType }) {
    return (
      <Link
        to={`/${mediaType === "movie" ? "movie" : "tv"}/${id}`}
        sx={{ margin: "10px" }}
      >
        <Card sx={{ maxWidth: 345, width: "100%" }}>
          <CardMedia
            component="img"
            height="150"
            image={`${BASE_IMAGE_URL}${img}`}
            alt={title}
          />
        </Card>
      </Link>
    );
}

export default MovieCard;
