import React from "react";
import { Paper } from "@mui/material";
import "./style.css";
import { useMoviesTrailerQuery } from "../../services/moviesApi";

const Player = (props) => {
   const { data, isLoading } = useMoviesTrailerQuery({
     'type': props.type,
     'id': props.id,
   });
   const loadData = isLoading ? (
     <>Loading...</>
   ) : (
     `https://www.youtube.com/embed/${data?.results[0]?.key}?controls=1`
   );
   return (
     <Paper
       className="paper"
       sx={{
         position: "relative",
       }}
     >
       <div className="video-container">
         <iframe
           frameBorder="0"
           width="100%"
           src={loadData}
           title="video"
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
         </div>
       </div>
     </Paper>
   );
}
export default Player;