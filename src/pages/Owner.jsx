import { React, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
const API_URL = "https://guestbook.devhudi.xyz/";

const Owner = () => {
  const [articleList, setArticleList] = useState();
  const { ownerId } = useParams();
  const navigate = useNavigate();

  const createArticle = () => {
    navigate(`/${ownerId}/create`);
  };

  useEffect(() => {
    axios.get(`${API_URL}${ownerId}/articles`).then((response) => {
      const titleList =
        response.data.length === 0 ? (
          <p>방명록이 비었습니다.</p>
        ) : (
          response.data.map((article) => (
            <Link to={`/articles/${article.id}`}>
              <li id={article.id}>{article.title}</li>
            </Link>
          ))
        );
      setArticleList(titleList);
    });
  }, []);

  useEffect(() => {
    axios.get(`${API_URL}${ownerId}/articles`).then((response) => {
      const titleList =
        response.data.length === 0 ? (
          <p>방명록이 비었습니다.</p>
        ) : (
          response.data.map((article) => (
            <Link to={`/articles/${article.id}`}>
              <li id={article.id}>{article.title}</li>
            </Link>
          ))
        );
      setArticleList(titleList);
    });
  }, [articleList]);

  return (
    <div>
      <h1>{ownerId}님의 방명록</h1>
      {articleList}
      <br />
      <button type="button" onClick={createArticle}>
        방명록 남기기
      </button>
    </div>
  );
};

export default Owner;
