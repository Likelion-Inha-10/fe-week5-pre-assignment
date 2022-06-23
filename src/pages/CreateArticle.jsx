import { React, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = "https://guestbook.devhudi.xyz/";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { ownerId } = useParams();
  const navigate = useNavigate();

  const addArticle = () => {
    axios
      .post(`${API_URL}${ownerId}/articles`, { body, title })
      .then((response) => {
        console.log("post complete");
      });
    navigate(`/${ownerId}`);
  };

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const bodyChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <div>
      <h1>{ownerId}님에게 방명록 남기기</h1>
      <input placeholder="제목" value={title} onChange={titleChange}></input>
      <br />
      <textarea
        placeholder="본문"
        value={body}
        onChange={bodyChange}
      ></textarea>
      <br />
      <button type="button" onClick={addArticle}>
        방명록 남기기!
      </button>
    </div>
  );
};

export default CreateArticle;
