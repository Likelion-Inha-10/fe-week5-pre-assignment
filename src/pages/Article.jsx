import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Article = ({ apiUrl }) => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState("");

  useEffect(() => {
    axios.get(`${apiUrl}/articles/${articleId}`).then((response) => {
      setPost(response.data);
    });
  }, [articleId]);

  const editArticle = () => {
    //EditArticle로 이동
    navigate(`/articles/${articleId}/edit`);
  };

  const deleteArticle = () => {
    axios.delete(`${apiUrl}/articles/${articleId}`).then(() => {
      navigate(-1);
    });
  };

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>작성일: {post.createdAt}</p>
      <button onClick={editArticle}>수정하기</button>
      <button onClick={deleteArticle}>제거하기</button>
    </>
  );
};

export default Article;
