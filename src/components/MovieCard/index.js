import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, Stack } from "@mui/material";
import { height } from "@mui/system";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ id, img, title, mediaType, rank, makerank = false, portrait = false}) {
    const rankImage =
      rank <= 10 && makerank ? (
        <img src={`../../../assets/images/Rank-${rank}.png`} alt={rank} />
      ) : (
        ""
      );
    const imgPosition = makerank ? "flex-start" : "center";
    const mediaPortrait = portrait ? '345px' : '150px';
    const cardPortrait = portrait ? '180px' : '345px';
    const topRankHeight = makerank ? "160px" : mediaPortrait;
    return (
      <Link
        to={`/${mediaType === "movie" ? "movie" : "tv"}/${id}`}
        sx={{ margin: "10px" }}
      >
        <Card
          sx={{ maxWidth: cardPortrait, width: "100%", position: "relative", background: "#232323"}}
        >
          <CardMedia height={topRankHeight}>
            <Stack
              direction="row"
              sx={{ width: "100%", overflow: "auto", height: topRankHeight }}
              justifyContent={imgPosition}
            >
              {rankImage}
              <img src={BASE_IMAGE_URL + img} alt={title} style={{height: "100%"}} />
            </Stack>
          </CardMedia>
        </Card>
      </Link>
    );
}

export default MovieCard;
