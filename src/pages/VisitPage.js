import React, { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const VisitPage = ({ apiUrl }) => {
  const { ownerId } = useParams();
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}${ownerId}/articles`).then((response) => {
      setArticleList(response.data);
    });
  }, [apiUrl, ownerId]);

  const navigate = useNavigate();
  const createVisit = () => {
    navigate(`/${ownerId}/create`);
  };

  return (
    <>
      <h2>{ownerId}님의 방명록</h2>
      {articleList.length === 0 ? (
        <div>방명록이 없습니다.</div>
      ) : (
        <ul>
          {articleList.map((element) => (
            <li key={element.id} title={element.title}>
              <NavLink to={`/articles/${element.id}`}>{element.title}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <br />
      <button onClick={createVisit}> 방명록 남기기 </button>
    </>
  );
};

export default VisitPage;
