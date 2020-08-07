import { GetServerSideProps } from "next";
import { FC } from "react";
import { useSelector } from "react-redux";
import withHOCS from "../components/hocs/withLayout";
import {
  TopMovie,
  PopularMovie,
  TopMoviesData,
  PopularMoviesData,
} from "../services/api/apiModels";
import doRequest from "../services/api/apiServices";
import MovieList from "../components/movieList/MovieList";

import STYLE from "./index.style";

interface Props {
  topMovies: TopMovie[];
  popularMovies: PopularMovie[];
}
const Home: FC<Props> = (props) => {
  const searchMovie = useSelector((state) => state.searchMovie);

  return (
    <STYLE.Main className="main">
      {searchMovie.length ? (
        <MovieList movies={searchMovie} heading="Movie" />
      ) : (
        <>
          <MovieList movies={props.topMovies} heading="Top Movie" asSlider />
          <MovieList
            movies={props.popularMovies}
            heading="Popular Movie"
            asSlider
          />
        </>
      )}
    </STYLE.Main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const topResponse = await doRequest<TopMoviesData>("movie", "top_rated");
  const popularResponse = await doRequest<PopularMoviesData>(
    "movie",
    "popular"
  );
  return {
    props: {
      topMovies: topResponse.results,
      popularMovies: popularResponse.results,
    },
  };
};

export default withHOCS((props: Props) => <Home {...props} />);
