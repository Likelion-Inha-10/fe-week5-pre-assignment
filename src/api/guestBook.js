import axios from "axios";

let API_HOST: "https://guestbook.devhudi.xyz";

export const findAllByOwnerId = (ownerId) => {
  return axios.get(`${API_HOST}/${ownerId}/articles`);
};

export const findById = (articleId) => {
  return axios.get(`${API_HOST}/articles/${articleId}`);
};

export const createArticle = (ownerId, title, body) => {
  return axios.post(`${API_HOST}/${ownerId}/articles`, {
    title,
    body,
  });
};

export const updateArticle = (ownerId, title, body) => {
  return axios.put(`${API_HOST}/${ownerId}/articles/`, { title, body });
};

export const deleteArticle = (id) => {
  return axios.delete(`${API_HOST}/articles/${id}`);
};
