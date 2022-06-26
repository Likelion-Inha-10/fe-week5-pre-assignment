import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Write from "./pages/Write";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

// API 주소
const API_URL = "https://guestbook.devhudi.xyz";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 방명록 목록 페이지 */}
        <Route path="/:userName" element={<WelcomePage apiUrl={API_URL} />} />
        {/* 방명록 작성 페이지 */}
        <Route path="/:userName/create" element={<Write apiUrl={API_URL} />} />
        {/* 방명록 상세정보 페이지 */}
        <Route
          path="/articles/:articleId"
          element={<Detail apiUrl={API_URL} />}
        />
        {/* 방명록 수정 페이지 */}
        <Route
          path="/articles/:articleId/edit"
          element={<Edit apiUrl={API_URL} />}
        />
        {/* 잘못된 url 입력했을 때 나타날 페이지 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
