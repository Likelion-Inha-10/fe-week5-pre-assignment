import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const CreateArticle = ({ apiUrl }) => {
  const { ownerId } = useParams();
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
    axios.post(`${apiUrl}${ownerId}/articles`, { title, body }).then(() => {
      navigate(`/${ownerId}`);
    });
  };

  return (
    <>
      <h1>{ownerId}님에게 방명록 남기기</h1>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={changeTitle}
      />
      <br />
      <textarea
        type="text"
        placeholder="본문"
        value={body}
        onChange={changeBody}
      />
      <br />
      <button onClick={clickSubmit}>방명록 남기기!</button>
    </>
  );
};

export default CreateArticle;
