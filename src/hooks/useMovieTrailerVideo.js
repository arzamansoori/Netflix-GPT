import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../redux/moviesSlice";
import { useEffect } from "react";


const useMovieTrailerVideo = (movieId) =>{

    const dispatch = useDispatch();

    const trailerVideo = useSelector((store) => store.movies?.addTrailerVideo)

    //fetching the trailer and updating the store with trailer video data
    const getMovieTrailer = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
  
      const filterTrailer = json.results.filter(
        (video) => video.type === "Trailer"
      );
  
      //there are two types of trailer that are coming
      //what if there's no type=tailer in api
      //handling both cases
      const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    };
  
    useEffect(() => {
      !trailerVideo && getMovieTrailer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useMovieTrailerVideo;