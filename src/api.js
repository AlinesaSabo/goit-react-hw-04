import axios from "axios";

export const fetchArticles = async (page = 0, query) => {
  const { data } = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      client_id: "MYM7bJdTmhADcMgcdu4WW3XOUzJlxzL5XA82nMszHKM",
      query: query,
      page: page,
      per_page: 7,
    },
  });
  return data.results;
};
