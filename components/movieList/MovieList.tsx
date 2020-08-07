import { FC } from "react";
import MovieItem from "../movieItem/MovieItem";
import { TopMovie, PopularMovie } from "../../services/api/apiModels";

import STYLE from "./MovieList.style";

export interface Props {
  movies: TopMovie[] | PopularMovie[];
  heading: string;
  asSlider?: boolean;
}

const MovieList: FC<Props> = (props: Props) => {
  console.log(props);
  return (
    <>
      <h1>{props.heading}</h1>
      <STYLE.List asSlider={props.asSlider}>
        {props.movies.map((movie: TopMovie | PopularMovie) => {
          return <MovieItem movie={movie} />;
        })}
      </STYLE.List>
    </>
  );
};

export default MovieList;
