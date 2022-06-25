import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditArticle = ({ apiUrl }) => {
  const { articleId } = useParams();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeBody = (e) => {
    setBody(e.target.value);
  };

  useEffect(() => {
    axios.get(`${apiUrl}articles/${articleId}`).then((response) => {
      setTitle(response.data.title);
      setBody(response.data.body);
    });
  }, [apiUrl, articleId]);

  const navigate = useNavigate();
  const onSubmit = () => {
    axios
      .put(`${apiUrl}articles/${articleId}`, { title, body })
      .then((response) => {
        navigate(-1);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={onChangeTitle}
      ></input>
      <br />
      <textarea
        type="text"
        placeholder="본문"
        value={body}
        onChange={onChangeBody}
      ></textarea>
      <br />
      <button onClick={onSubmit}>방명록 남기기!</button>
    </div>
  );
};

export default EditArticle;
