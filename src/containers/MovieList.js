import { Container } from "@mui/material";
import React from "react"; 
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MovieList = () => {
    return(
        <>
            <Navbar/>
            <Container sx={{minHeight: '100vh', marginTop: '20vh'}}>
                this is the movie list
            </Container>
            <Footer/>
        </>
    )
}

export default MovieList;