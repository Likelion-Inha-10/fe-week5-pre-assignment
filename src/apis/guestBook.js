import axios from "axios"; //axios기능 가져오기

const API_HOST = "https://guestbook.devhudi.xyz"; //APT 주소 등록

export const findAllByOwnerId = (ownerId) => {
  return axios.get(`${API_HOST}/${ownerId}/articles`);
  //API에서 특정 유저(ownerId) 방명록 목록 조회하는 함수
};

export const findById = (id) => {
  return axios.get(`${API_HOST}/articles/${id}`);
  //API에서 특정 방명록(Id) 목록 조회
};

export const createArticle = (id, title, body) => {
  return axios.post(`${API_HOST}/${id}/articles`, {
    title,
    body,
    // 특정 유저에 방명록 생성(id, title, body 값을 가져와서 생성)
  });
};

export const updateArticle = (id, title, body) => {
  return axios.put(`${API_HOST}/articles/${id}`, {
    title,
    body,
    // 방명록 수정(id, title, body 값을 가져와서 수정)
  });
};

export const deleteArticle = (id) => {
  return axios.delete(`${API_HOST}/articles/${id}`);
  // 방명록 제거(id값 제거)
};
