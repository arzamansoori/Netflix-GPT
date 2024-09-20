import { useSelector } from "react-redux";
import languageConstants from "../utils/languageConstants";

const GPTSearchBar = () => {

    const lang = useSelector((store) => store.config.lang)

  return (
    <div className="pt-[10%]">
      <form className="flex justify-center items-center">
        <input
          className="w-[30%] p-3 rounded-xl text-red-800"
          placeholder={languageConstants[lang]?.gptSearchPlaceholder}
        ></input>
        <button className="p-3 m-2 rounded-xl bg-red-800 text-white">
        {languageConstants[lang]?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
