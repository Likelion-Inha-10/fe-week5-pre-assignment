import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

//Owner만 참고했습니다... 죄송합니다ㅠㅠ
const Owner = ({ host }) => {
  const { ownerId } = useParams();
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`${host}/${ownerId}/articles`).then((response) => {
      setArticles(response.data); //response안에 data가 있고 이 안에 배열로 아이디, 제목등.. 이 있다.
    });
  }, []);

  const moveToWrite = () => {
    navigate(`/${ownerId}/create`); //슬래시를 앞에 넣어야 정상작동하는 것은 무슨 이유잉
  };

  return (
    <>
      <h1>{ownerId}님의 방명록</h1>
      {articles.length === 0 ? <p>방명록이 없습니다.</p> : <div></div>}
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={moveToWrite}>방명록 남기기</button>
    </>
  );
};

export default Owner;
//body, createAt, id, title
