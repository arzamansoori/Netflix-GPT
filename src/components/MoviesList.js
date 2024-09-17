import MoviesCard from "./MoviesCard";


const MoviesList = ({title, movies}) => {
    return (
        <div>
            <h1>{title}</h1>
            <MoviesCard poster_path={movies[0]?.poster_path}/>
        </div>
    );
};

export default MoviesList;