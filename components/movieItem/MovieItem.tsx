import { TopMovie, PopularMovie } from "../../services/api/apiModels";
import { selectMovie } from "../../redux/selectedMovie/actions";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modal/action";
import STYLE from "./MovieItem.style";

const MovieItem = ({ movie }: { movie: TopMovie | PopularMovie }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(selectMovie(movie));
    dispatch(openModal());
  };
  return (
    <STYLE.ListItem key={movie.id} onClick={handleClick}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}
        alt="avatar"
      />
      <p>{movie.title}</p>
    </STYLE.ListItem>
  );
};

export default MovieItem;
