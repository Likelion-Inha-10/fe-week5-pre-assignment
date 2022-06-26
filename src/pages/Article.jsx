import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as guestBookApi from "../api/guestBook";

const Article = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    guestBookApi.findById(articleId).then((res) => {
      setArticle(res.data);
    });
  }, [articleId]);

  const handleDeleteClick = () => {
    guestBookApi.deleteArticle(articleId).then(() => {
      navigate(-1);
    });
  };

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <p>작성일: {article.createdAt}</p>

      <NavLink to={`/articles/${articleId}/edit`}>
        <button> 수정😓 </button>
      </NavLink>

      <button onClick={handleDeleteClick}> 제거😱 </button>
    </div>
  );
};

export default Article;
