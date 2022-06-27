import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditArticle = ({ host }) => {
  const { articleId } = useParams();
  const [article, setArticle] = useState({ title: "", body: "" }); //이게 오브젝트인가?
  const { title, body } = article;
  const navigate = useNavigate();

  const editArticle = () => {
    axios
      .put(`${host}/articles/${articleId}`, {
        //put이 수정 method
        title: article.title,
        body: article.body,
      })
      .then(() => {
        navigate(-1);
      });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setArticle({
      ...article, // 이 코드 덩어리에 대한 이해가 필요하다..
      [name]: value,
    });
  };

  return (
    <div>
      <input
        placeholder="제목"
        name="title"
        onChange={onChange}
        value={title}
      />
      <br></br>
      <textarea
        placeholder="내용"
        name="body"
        onChange={onChange}
        value={body}
      />
      <br></br>

      <button onClick={editArticle}>방명록 남기기!</button>
    </div>
  );
};

export default EditArticle;
