import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateArticle = ({ apiUrl }) => {
  const { ownerId } = useParams();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeBody = (e) => {
    setBody(e.target.value);
  };

  const navigate = useNavigate();
  const onSubmit = () => {
    axios
      .post(`${apiUrl}${ownerId}/articles`, { title, body })
      .then((response) => {
        navigate(-1);
      });
  };
  return (
    <>
      <h2>{ownerId}님에게 방명록 남기기</h2>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={onChangeTitle}
      />
      <br />
      <textarea
        type="text"
        placeholder="본문"
        value={body}
        onChange={onChangeBody}
      />
      <br />
      <button onClick={onSubmit}>방명록 남기기!</button>
    </>
  );
};

export default CreateArticle;
