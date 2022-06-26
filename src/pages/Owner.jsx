import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as guestBookApi from "../api/guestBook";

const Owner = () => {
  const { ownerId } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    guestBookApi.findAllByOwnerId(ownerId).then((res) => {
      setArticles(res.data);
    });
  }, [ownerId]);

  return (
    <div>
      <h1> 소정이의 방명록 ✧ </h1>

      {articles.length === 0 && <p>방명록을 남겨주세요!</p>}

      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <NavLink to={`articles/${article.id}`}>{article.title}</NavLink>
          </li>
        ))}
      </ul>
      <NavLink to={`/${ownerId}/create`}>
        <button>방명록 남기기</button>
      </NavLink>
    </div>
  );
};

export default Owner;
