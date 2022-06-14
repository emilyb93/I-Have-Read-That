import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://news-server-project.herokuapp.com/api",
});

export const fetchArticles = async () => {
  const res = await newsApi.get("/articles");

  return res.data.articles;
};
