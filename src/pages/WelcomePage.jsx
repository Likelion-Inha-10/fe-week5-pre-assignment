import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";

const WelcomePage = ({ apiUrl }) => {
  const { userName } = useParams(); // 사용자 이름
  const [articles, setArticles] = useState([]); // 방명록 목록 배열

  // 방명록 목록 가져옴
  useEffect(() => {
    axios.get(`${apiUrl}/${userName}/articles`).then((res) => {
      setArticles(res.data);
    });
  }, [userName]);

  return (
    <>
      <h1>{userName}님의 방명록</h1>
      {articles.length === 0 && <p>방명록이 없습니다.</p>}
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.id}>
              <NavLink to={`/articles/${article.id}`}>{article.title}</NavLink>
            </li>
          );
        })}
      </ul>
      <NavLink to={`/${userName}/create`}>
        <button>방명록 남기기</button>
      </NavLink>
    </>
  );
};

export default WelcomePage;
