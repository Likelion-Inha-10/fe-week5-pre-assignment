import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { axios } from "axios";

const EditArticle = ({ apiUrl }) => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    axios.get(`${apiUrl}/articles/${articleId}`).then((response) => {
      setTitle(response.data.title);
      setBody(response.data.body);
    });
  }, [articleId]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = () => {
    axios
      .put(`${apiUrl}/articles/${articleId}`, {
        title,
        body,
      })
      .then((response) => {
        console.log(response);
        navigate(-1);
      })
      .catch((error) => {
        console.log(error.response.data.mesage);
      });
  };
  return (
    <>
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

export default EditArticle;
