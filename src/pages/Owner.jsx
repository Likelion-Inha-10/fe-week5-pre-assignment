import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import * as guestBookApi from "../apis/guestBook";
// 필요한 것들 import 해옴.

const Owner = () => {
  const { ownerId } = useParams();
  // onwerId에다가 useParams를 이용하여 파라미터 정보를 가져와 쓰겠다.
  const [articles, setArticles] = useState([]);
  // aricles 값을 useState를 활용하여 값 계속 바꾸기

  useEffect(() => {
    guestBookApi.findAllByOwnerId(ownerId).then((res) => {
      setArticles(res.data);
    });
  }, [ownerId]);
  // API에서 owerId가져와서 article 변수를 그 데이터로 변경

  return (
    <>
      <h1>{ownerId}님의 방명록</h1>
      {/*앞써 UseEffect로 가져온 onwerId를 출력*/}

      {articles.length === 0 && <p>방명록이 없습니다.</p>}
      {/* aricles의 길이가 0이라면 '방명록이 없습니다.' 출력*/}
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <NavLink to={`/articles/${article.id}`}>{article.title}</NavLink>
          </li>
          //댓글 단것이 있다면 출력해주는 코드 => article의 id(제목)을 받아서 출력한다. 또한 그 값을 주소로 설정한다.
        ))}
      </ul>

      <NavLink to={`/${ownerId}/create`}>
        <button> 방명록 남기기 </button>
      </NavLink>
      {/*방명록 남기기 버튼 영역 => 이는 누르면 ownerId/create값을 주소로 가진다.*/}
    </>
  );
};

export default Owner;
//Owner 밖으로 내보냄 => 나중에 App에서 나타냄.
