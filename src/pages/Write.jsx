import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Write = ({ apiUrl }) => {
  const { userName } = useParams(); // 사용자 이름
  const navigate = useNavigate();
  const [title, setTitle] = useState(""); // 방명록 제목
  const [body, setBody] = useState(""); // 방명록 본문

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (e) => {
    setBody(e.target.value);
  };

  // 새로운 방명록 등록
  const onSubmit = () => {
    axios
      .post(`${apiUrl}/${userName}/articles`, {
        title: title,
        body: body,
      })
      .then((res) => {
        navigate(-1);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <>
      <h1>{userName}님에게 방명록 남기기</h1>
      <input
        type="text"
        placeholder="제목"
        onChange={onChangeTitle}
        value={title}
      />
      <br />
      <textarea
        type="text"
        placeholder="본문"
        onChange={onChangeBody}
        value={body}
      />
      <br />
      <button onClick={onSubmit}>방명록 남기기!</button>
    </>
  );
};

export default Write;
