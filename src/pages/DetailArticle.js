import React, { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const DetailArticle = ({ apiUrl }) => {
  const { articleId } = useParams();
  const [article, setArticle] = useState("");

  const navigate = useNavigate();
  const onDelete = () => {
    axios.delete(`${apiUrl}articles/${articleId}`).then((response) => {
      navigate(-1);
    });
  };

  useEffect(() => {
    axios.get(`${apiUrl}articles/${articleId}`).then((response) => {
      setArticle(response.data);
    });
  }, [apiUrl, articleId]);

  return (
    <>
      <h2>{article.title}</h2>
      <div>{article.body}</div>
      <div>작성일: {article.createdAt}</div>

      <NavLink to={`/articles/${articleId}/edit`}>
        <button> 수정하기 </button>
      </NavLink>

      <button onClick={onDelete}> 제거하기 </button>
    </>
  );
};

export default DetailArticle;
