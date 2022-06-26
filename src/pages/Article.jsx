import { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import * as guestBookApi from "../apis/guestBook";

const Article = () => {
  const { articleId } = useParams();
  // useParams값에다가 articleIds를 이용하여 파라미터 정보를 가져와 쓰겠다.
  const navigate = useNavigate(); // 현 위치 선언
  const [article, setArticle] = useState(null); //useState 활용하여 article 선언 및 함수 선언

  useEffect(() => {
    guestBookApi.findById(articleId).then((res) => {
      setArticle(res.data); // Api에서 articleId를 가져와서 setArticle함수에 대입하여 article 변수를 set해준다.
    });
  }, [articleId]); // articleId가 바뀔때마다 선언

  const handleDeleteClick = () => {
    guestBookApi.deleteArticle(articleId).then(() => {
      navigate(-1);
    }); // delete 기능을 수행하는 함수, 클릭하면 없애고 이전페이지로 이동
  };

  if (!article) return <p>로딩중</p>;

  return (
    <>
      <h1>{article.title}</h1> {/* 제목 출력 */}
      <p>{article.body}</p> {/* 본문 출력 */}
      <p>작성일: {article.createdAt}</p> {/* 작성일 출력 */}
      <NavLink to={`/articles/${articleId}/edit`}>
        <button> 수정하기 </button> {/* 수정하기 버튼을 누르면 edit로 이동*/}
      </NavLink>
      <button onClick={handleDeleteClick}> 제거하기 </button>
      {/* 버튼을 누르면 값 제거 */}
    </>
  );
};

export default Article;
