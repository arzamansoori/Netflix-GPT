import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import {bg_url} from "../utils/images"

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:w-screen" src={bg_url} alt="backgoundImage" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
