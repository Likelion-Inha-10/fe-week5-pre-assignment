import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as guestBookApi from "../apis/guestBook";

const EditArticle = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  // useParams값에다가 useParams를 이용하여 파라미터 정보를 가져와 쓰겠다.

  const [title, setTitle] = useState(""); // useState를 활용하여 title 계속 set시킨다.
  const [body, setBody] = useState(""); // useState를 활용하여 body 계속 set시킨다.

  useEffect(() => {
    guestBookApi.findById(articleId).then((res) => {
      // aricleId가 변경될 때마다, 특정 방명록(Id) 목록 조회 함수에서 값을 가져와서 아래 시행
      setTitle(res.data.title); //title 변경 함수
      setBody(res.data.body); //body 변경 함수
    });
  }, [articleId]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value); // 제목을 입력하면 setTitle함수에 넣는다.
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value); // 내용을 입려가면 setBody함수에 넣는다.
  };

  const handleSubmit = () => {
    //결과 입력 함수
    guestBookApi
      .updateArticle(articleId, title, body) //값들을 업데이트 시켜주는 함수에 넣기
      .then((res) => {
        navigate(-1); //전페이지로 가기
      })
      .catch((err) => {
        alert(err.response.data.message); //잘못된 값이 입력되면 에러메시지 띄우기
      });
  };

  return (
    <>
      <input
        //제목 들어가는 영역 => onChange={handleTitleChange} 이를 넣음으로써 값을 입력하면 title값을 set시켜준다.
        type="text"
        placeholder="제목"
        onChange={handleTitleChange}
        value={title}
      />
      <br />
      <textarea
        //본문 들어가는 영역 => onChange={handleBodyChange} 이를 넣음으로써 값을 입력하면 body값을 set시켜준다.
        type="text"
        placeholder="본문"
        onChange={handleBodyChange}
        value={body}
      />
      <br />
      {/* 버튼을 누르면 {handleSubmit} 실행하여 결과값 넣기 */}
      <button onClick={handleSubmit}> 방명록 남기기! </button>
    </>
  );
};

export default EditArticle;
// EditArticle 밖으로 내보내기
