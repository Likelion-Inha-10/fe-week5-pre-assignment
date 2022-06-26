import { useParams, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = ({ apiUrl }) => {
  const { ownerId } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/${ownerId}/articles`).then((response) => {
      setPost(response.data);
    });
  }, [ownerId]);

  return (
    <>
      <h1>{ownerId}님의 방명록</h1>

      {post.length === 0 && <p>방명록이 없습니다.</p>}
      <ul>
        {post.map((article) => (
          <li key={article.id}>
            <NavLink to={`/articles/${article.id}`}>{article.title}</NavLink>
          </li>
        ))}
      </ul>

      <NavLink to={`/${ownerId}/create`}>
        <button>방명록 남기기</button>
      </NavLink>
    </>
  );
};

export default Home;
