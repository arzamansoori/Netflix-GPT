import { CDN_URL } from "../utils/images";


const MoviesCard = ({poster_path}) => {
    return (
        <div className="w-48 pr-7">
            <img alt="poster_img" src={CDN_URL+poster_path}></img>
        </div>
    );
};

export default MoviesCard;