import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as guestBookApi from "../api/guestBook";

const EditArticle = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  useEffect(() => {
    guestBookApi.findById(articleId).then((res) => {
      setTitle(res.data.title);
      setBody(res.data.body);
    });
  }, [articleId]);

  const handleSubmit = () => {
    guestBookApi
      .updateArticle(articleId, title, body)
      .then((res) => {
        navigate(-1);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div>
      <h1>방명록 남기기</h1>
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
      <button onClick={handleSubmit}>방명록 남기기</button>
    </div>
  );
};

export default EditArticle;
