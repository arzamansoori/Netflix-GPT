import { useDispatch, useSelector } from "react-redux";
import languageConstants from "../utils/languageConstants";
import { useRef } from "react";
//import openai from "../utils/openai";
import genAI from "../utils/geminiai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMoviesResults } from "../redux/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch()
  const lang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    //searching movie in tmdb database
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await response.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a movie recommendation system for this query : " +
      searchText.current.value +
      ". Only give me names of 5 movies names, in the form of string, comma separated, no next line";

    // const gptSearchResult = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log("GPT Search Results", gptSearchResult.choices);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = gptQuery;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const gptMovies = response.text().split(",");
    if (!gptMovies) return null;
    console.log("GPTMovies",gptMovies)

    //["movie1", "movie2", "movie3", "movie4"]
    const moviesPromise = gptMovies.map((movie) => searchMovieTMDB(movie));

    //this moviesPromise will return "array of promise" [promise1, promise2...., promise5]
    const tmdbResults = await Promise.all(moviesPromise);
    console.log("tmdbResults",tmdbResults);

    //dispatch an action to add tmdbResults in Redux store
    dispatch(addGPTMoviesResults({movieNames : gptMovies, movieResults : tmdbResults}))

  };

  return (
    <div className="pt-[42%] sm:pt-[25%] md:pt-[12%]">
      <form
        className="flex justify-center items-center px-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="w-[50%] sm:[70%] md:w-[30%] p-3 rounded-xl text-red-800"
          placeholder={languageConstants[lang]?.gptSearchPlaceholder}
        ></input>
        <button
          onClick={handleGPTSearchClick}
          className="p-3 m-2 rounded-xl bg-red-800 text-white hover:opacity-75"
        >
          {languageConstants[lang]?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
