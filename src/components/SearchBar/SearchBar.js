import React, { useState, useEffect } from "react";
import { Input } from "@mui/material";
import { Search } from "@mui/icons-material";


const SearchBar = (props) => {
    const [searchInput, setSearchInput] = useState("");
    
    // useEffect(()=>{
    //     if (searchInput !== "") {
    //         history.push(`/search/${searchInput}`);
    //     }
    // },[searchInput])

    return (
        <>
            <Search fontSize="small" />
        </>
    );
};

export default SearchBar;
