import { React, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = "https://guestbook.devhudi.xyz/";

const EditArticle = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { articleId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_URL}articles/${articleId}`).then((response) => {
      setTitle(response.data.title);
      setBody(response.data.body);
    });
  }, []);

  const saveArticle = () => {
    axios
      .put(`${API_URL}articles/${articleId}`, { body, title })
      .then((response) => {
        console.log("update complete");
      });
    navigate(-1);
  };

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const bodyChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <div>
      <input placeholder="제목" value={title} onChange={titleChange}></input>
      <br />
      <textarea
        placeholder="본문"
        value={body}
        onChange={bodyChange}
      ></textarea>
      <br />
      <button type="button" onClick={saveArticle}>
        방명록 남기기!
      </button>
    </div>
  );
};

export default EditArticle;
