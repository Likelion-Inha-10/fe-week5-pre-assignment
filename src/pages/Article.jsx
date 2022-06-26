import { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";

const Article = ({ apiUrl }) => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState();

  useEffect(() => {
    axios.get(`${apiUrl}/articles/${articleId}`).then((response) => {
      setArticle(response.data);
    });
  }, [articleId]);

  const Delete = () => {
    axios.delete(`${apiUrl}/articles/${articleId}`).then(() => {
      navigate(-1);
    });
  };

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <p>작성일: {article.createAt}</p>

      <NavLink to={`/articles/${articleId}/edit`}>
        <button> 수정하기</button>
      </NavLink>
      <button onClick={Delete}> 제거하기</button>
    </>
  );
};

export default Article;
