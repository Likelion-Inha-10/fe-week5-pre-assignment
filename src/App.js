import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import VisitPage from "./pages/VisitPage";
import CreateArticle from "./pages/CreateArticle";
import DetailArticle from "./pages/DetailArticle";
import EditArticle from "./pages/EditArticle";

const API_URL = "https://guestbook.devhudi.xyz/";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/welcome/:name" element={<WelcomePage />} />

        <Route
          path="/:ownerId"
          element={<VisitPage apiUrl={API_URL}></VisitPage>}
        />
        <Route
          path="/:ownerId/create"
          element={<CreateArticle apiUrl={API_URL}></CreateArticle>}
        />
        <Route
          path="/articles/:articleId"
          element={<DetailArticle apiUrl={API_URL}></DetailArticle>}
        />
        <Route
          path="/articles/:articleId/edit"
          element={<EditArticle apiUrl={API_URL}></EditArticle>}
        />
        <Route path="*" element={<h2>페이지를 찾을 수 없습니다.</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
