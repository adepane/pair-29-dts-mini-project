import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia } from "@mui/material";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ id, img, title, mediaType, rank, makerank = false}) {
    const rankImage =
      rank <= 10 && makerank ? (
        <div
          style={{
            position: "absolute ",
            background: `url(../../../assets/images/Rank-${rank}.png)`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            height: "100%",
            width: "100%",
            top: "0",
            left: "0",
          }}
        ></div>
      ) : (
        ""
      );
    return (
      <Link
        to={`/${mediaType === "movie" ? "movie" : "tv"}/${id}`}
        sx={{ margin: "10px" }}
      >
        <Card sx={{ maxWidth: 345, width: "100%", position: 'relative' }}>
          <CardMedia
            component="img"
            height="150"
            image={`${BASE_IMAGE_URL}${img}`}
            alt={title}
          />
          {rankImage}
        </Card>
      </Link>
    );
}

export default MovieCard;
