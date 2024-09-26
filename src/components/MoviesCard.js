import { CDN_URL } from "../utils/images";


const MoviesCard = ({poster_path}) => {
    if(!poster_path) return null;
    return (
        <div className="w-48 pr-7 hover:scale-105 ease-in-out duration-300 cursor-pointer">
            <img alt="poster_img" src={CDN_URL+poster_path}></img>
        </div>
    );
};

export default MoviesCard;