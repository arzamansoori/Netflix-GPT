import languageConstants from "../utils/languageConstants"

const GPTSearchBar = () => {
    return (
        <div className="pt-[10%]">
            <form className="flex justify-center items-center">
                <input className="w-[30%] p-3 rounded-xl text-red-800" placeholder={languageConstants?.hindi?.gptSearchPlaceholder}></input>
                <button className="p-3 m-2 rounded-xl bg-red-800 text-white">Search</button>
            </form>
        </div>
    );
};

export default GPTSearchBar;