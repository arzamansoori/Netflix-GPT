import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
    //accessing the redux store to get now playing movies
    const movies = useSelector((store)=>store.movies);

    if(!movies) return;

    return(
        movies?.nowPlayingMovies && (
        <div className="bg-black pt-[40%] sm:pt-[35%] md:pt-[0%]">
           <div className="-mt-72 relative z-20">
           <h1><MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies}/></h1>
           </div>
            <h1><MoviesList title={"Popular"} movies={movies?.popularMovies}/></h1>
            <h1><MoviesList title={"Top Rated"} movies={movies?.topRatedMovies}/></h1>
            <h1><MoviesList title={"Upcoming Movies"} movies={movies?.upcomingMovies}/></h1>
        </div>
        )
    );
};

export default SecondaryContainer;