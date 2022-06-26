import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as guestBookApi from "../api/guestBook";

const CreateArticle = () => {
  const { ownerId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = () => {
    guestBookApi
      .createArticle(ownerId, title, body)
      .then((res) => {
        navigate(-1);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div>
      <h1>소정이에게 방명록 남기기</h1>
      <input
        type="text"
        placeholder="제목"
        onChange={handleTitleChange}
        value={title}
      ></input>
      <br></br>
      <textarea
        type="text"
        placeholder="내용"
        onChange={handleBodyChange}
        value={body}
      />
      <br></br>
      <button OnClick={handleSubmit}>방명록 남기기😉</button>
    </div>
  );
};

export default CreateArticle;
