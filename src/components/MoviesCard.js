import { CDN_URL } from "../utils/images";


const MoviesCard = ({poster_path}) => {
    return (
        <div>
            <img alt="poster_img" src={CDN_URL+poster_path}></img>
        </div>
    );
};

export default MoviesCard;