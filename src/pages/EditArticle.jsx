import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const EditArticle = ({ apiUrl }) => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeBody = (e) => {
    setBody(e.target.value);
  };

  const clickSubmit = () => {
    axios.put(`${apiUrl}/articles/${articleId}`, { title, body }).then(() => {
      navigate(-1);
    });
  };

  return (
    <>
      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={changeTitle}
      />
      <br />
      <textarea
        type="text"
        placeholder="내용을 입력하세요"
        value={body}
        onChange={changeBody}
      />
      <br />
      <button onClick={clickSubmit}>수정 완료!</button>
    </>
  );
};

export default EditArticle;
