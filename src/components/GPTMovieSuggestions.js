import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GPTMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="text-white bg-black bg-opacity-85 m-6 mt-10 pb-5 pt-5">
      <div>
        {movieNames.map((movieName, index) => (
          <MoviesList key={movieName} title={movieName} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
