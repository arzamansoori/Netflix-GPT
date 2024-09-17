import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {

    //accessing the redux store to get now playing movies
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);

    if(!movies) return;
    
    console.log("secondary container movies",movies)

    return(
        <div>
            <h1><MoviesList title={"Now Playing"} movies={movies}/></h1>
        </div>
    );
};

export default SecondaryContainer;