import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateArticle = ({ apiUrl }) => {
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
    axios
      .post(`${apiUrl}/${ownerId}/articles`, { title, body })
      .then((response) => {
        console.log(response);
        navigate(-1);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };
  return (
    <>
      <h1>{ownerId}님에게 방명록 남기기</h1>
      <input
        type="text"
        placeholder="제목"
        onChange={handleTitleChange}
        value={title}
      />
      <br />
      <textarea
        type="text"
        placeholder="본문"
        onChange={handleBodyChange}
        value={body}
      />
      <br />
      <button onClick={handleSubmit}>방명록 남기기!</button>
    </>
  );
};

export default CreateArticle;
