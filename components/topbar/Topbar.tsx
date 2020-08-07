import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovieAction } from "../../redux/searchMovie/action";
import { SearchMovieData } from "../../services/api/apiModels";
import STYLE from "./Topbar.style";
import doRequest from "../../services/api/apiServices";

const Topbar = () => {
  const [keyword, setKeyword] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const multisearchResponse = await doRequest<SearchMovieData>(
      "search",
      "multi",
      keyword
    );
    dispatch(searchMovieAction(multisearchResponse.results));
    console.log("multisearchResponse", multisearchResponse);
  };

  return (
    <STYLE.Wrapper>
      <STYLE.Container>
        <STYLE.Logo>logo</STYLE.Logo>
        <STYLE.Form onSubmit={handleSubmit}>
          <STYLE.Search
            placeholder="Search any movies or tv shows"
            onChange={handleChange}
            value={keyword}
          />
        </STYLE.Form>
        <nav>
          <STYLE.List>
            <STYLE.ListItem>Movies</STYLE.ListItem>
            <STYLE.ListItem>TV Shows</STYLE.ListItem>
            <STYLE.ListItem>Watch List</STYLE.ListItem>
            <STYLE.ListItem>Signup</STYLE.ListItem>
          </STYLE.List>
        </nav>
      </STYLE.Container>
    </STYLE.Wrapper>
  );
};

export default Topbar;
