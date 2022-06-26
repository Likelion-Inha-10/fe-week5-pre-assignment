import React from "react";
import { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Detail = ({ apiUrl }) => {
  const { articleId } = useParams(); // 방명록 id
  const navigate = useNavigate();
  const [article, setArticle] = useState([]); // 해당 id에 대한 방명록 배열

  // 해당 id에 대한 방명록 가져옴
  useEffect(() => {
    axios.get(`${apiUrl}/articles/${articleId}`).then((res) => {
      setArticle(res.data);
    });
  }, [articleId]);

  // 해당 id를 가진 방명록 삭제
  const onDelete = () => {
    axios.delete(`${apiUrl}/articles/${articleId}`).then(() => {
      navigate(-1);
    });
  };

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <p>작성일: {article.createdAt}</p>
      <NavLink to={`/articles/${articleId}/edit`}>
        <button>수정하기</button>
      </NavLink>
      <button onClick={onDelete}>제거하기</button>
    </>
  );
};

export default Detail;
