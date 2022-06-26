import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateArticle = ({ host }) => {
  const { ownerId } = useParams();
  const [article, setArticle] = useState({ title: "", body: "" }); //이게 오브젝트인가? 브라켓으로 담긴게 오브젝트인가????
  const { title, body } = article;
  const navigate = useNavigate();

  //서버에 연결해 제목과 내용을 전송
  const submitArticle = () => {
    axios
      .post(`${host}/${ownerId}/articles`, {
        title: article.title,
        body: article.body,
      })
      .then(() => {
        navigate(-1);
      });
  };

  //article을 수정해주는 함수인데 이게 필요한지는 잘 모르겠다.
  const onChange = (e) => {
    const { name, value } = e.target;
    setArticle({
      ...article, // 이 코드는 뭐지!?
      [name]: value,
    });
  };

  return (
    <div>
      <h1>{ownerId}님에게 방명록 남기기</h1>
      <input
        placeholder="제목"
        name="title"
        onChange={onChange}
        value={title}
      ></input>
      <br></br>
      <textarea
        placeholder="내용"
        name="body"
        onChange={onChange}
        value={body}
      />
      <br></br>

      <button onClick={submitArticle}>방명록 남기기!</button>
    </div>
  );
};

export default CreateArticle;
