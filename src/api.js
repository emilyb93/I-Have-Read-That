import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://news-server-project.herokuapp.com/api",
});

export const fetchArticles = async (slug) => {
  const res = await newsApi.get("/articles", { params: { topic: slug } });

  return res.data.articles;
};

export const fetchTopics = async () => {
  const res = await newsApi.get("/topics");

  return res.data.topics;
};

export const fetchArticleWithId = async (article_id) => {
  const res = await newsApi.get(`/articles/${article_id}`);
  return res.data.article;
};
