import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
//import { logo_url } from "../utils/images";

const Browse = () => {

  //using custom hook to add the now playing movies into redux store
  useNowPlayingMovies();

  return (
    <Header />
  );
};

export default Browse;
