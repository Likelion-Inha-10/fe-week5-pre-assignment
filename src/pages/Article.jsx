import { React, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = "https://guestbook.devhudi.xyz/";

const Article = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [time, setTime] = useState();
  const { articleId } = useParams();
  const navigate = useNavigate();

  const editArticle = () => {
    navigate(`/articles/${articleId}/edit`);
  };

  const deleteArticle = () => {
    axios.delete(`${API_URL}articles/${articleId}`).then((response) => {
      console.log("delete complete");
    });
    navigate(-1);
  };

  useEffect(() => {
    axios
      .get(`${API_URL}articles/${articleId}`)
      .then((response) => {
        setTitle(response.data.title);
        setBody(response.data.body);
        setTime(response.data.createdAt);
      })
      .catch((error) => {
        navigate(`/wrong/Address`);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}articles/${articleId}`)
      .then((response) => {
        setTitle(response.data.title);
        setBody(response.data.body);
        setTime(response.data.createdAt);
      })
      .catch((error) => {
        navigate(`/wrong/Address`);
      });
  }, [title]);

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>작성일: {time}</p>
      <button type="button" onClick={editArticle}>
        수정하기
      </button>
      <button type="button" onClick={deleteArticle}>
        제거하기
      </button>
    </div>
  );
};

export default Article;
