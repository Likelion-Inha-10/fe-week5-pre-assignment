import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as guestBookApi from "../apis/guestBook";

// CreateArticle 부분은 EditArticle와 똑같다.
// 단, ownerId 을 출력하는 부분만 다르다.

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
        alert("ownerId : " + ownerId + " title : " + title + " body : " + body);
        alert(err.response.data.message);
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
      <button onClick={handleSubmit}> 방명록 남기기! </button>
    </>
  );
};

export default CreateArticle;
