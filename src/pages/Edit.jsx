import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Edit = ({ apiUrl }) => {
  const { articleId } = useParams(); // 방명록 id
  const navigate = useNavigate();
  const [title, setTitle] = useState(""); // 방명록 제목
  const [body, setBody] = useState(""); // 방명록 본문

  // id를 통해 방명록 가져옴
  useEffect(() => {
    axios.get(`${apiUrl}/articles/${articleId}`).then((res) => {
      setTitle(res.data.title);
      setBody(res.data.body);
    });
  }, [articleId]);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (e) => {
    setBody(e.target.value);
  };

  // put을 통해 방명록 수정
  const onSubmit = () => {
    axios
      .put(`${apiUrl}/articles/${articleId}`, {
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
      <input
        type="text"
        placeholder="제목"
        onChange={onChangeTitle}
        value={title}
      ></input>
      <br />
      <textarea
        placeholder="본문"
        onChange={onChangeBody}
        value={body}
      ></textarea>
      <br />
      <button onClick={onSubmit}>방명록 남기기!</button>
    </>
  );
};

export default Edit;
