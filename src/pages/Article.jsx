import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Article = ({ host }) => {
  const [post, setPost] = useState({});
  const { articleId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`${host}/articles/${articleId}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  const removeArticle = () => {
    axios
      .delete(`${host}/articles/${articleId}`, {
        //request method alises중에 있는 delete
        id: articleId,
      })
      .then(() => {
        navigate(-1);
      });
  };
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>작성일: {post.createdAt}</p>

      <Link to={`/articles/${articleId}/edit`}>
        <button>수정하기</button>
      </Link>
      <button onClick={removeArticle}>제거하기</button>
    </>
  );
};

export default Article;
