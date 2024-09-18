import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../redux/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("API data", json.results);
    //this will add movies in the redux store
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useUpcomingMovies;
