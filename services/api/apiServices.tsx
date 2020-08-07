import axios from "axios";

async function doRequest<T>(
  searchType: string,
  endpoint: string,
  keyword?: string
) {
  const key = process.env.API_KEY || "92d08d6d237c657537491b280a96d75a";
  const baseUrl = "https://api.themoviedb.org";

  console.log("keywordwwwww", keyword);
  const url = keyword
    ? `${baseUrl}/3/${searchType}/${endpoint}?api_key=${key}&query=${keyword}&language=en-US&page=1`
    : `${baseUrl}/3/${searchType}/${endpoint}?api_key=${key}&language=en-US&page=1`;

  const response = await axios.get<T>(url);

  console.log(response.data);
  return response.data;
}

export default doRequest;
