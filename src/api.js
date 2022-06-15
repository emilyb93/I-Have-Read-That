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

export const patchArticleVotes = async (article_id, inc_votes) => {
  const res = await newsApi.patch(`/articles/${article_id}`, { inc_votes });

  return res;
};

export const fetchComments = async (article_id) => {
  const res = await newsApi.get(`/articles/${article_id}/comments`);

  return res.data.comments;
};

export const patchCommentVotes = async (comment_id, inc_votes) => {
  const res = await newsApi.patch(`/comment/${comment_id}`, { inc_votes });

  return res;
};
