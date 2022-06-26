import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./pages/Article";
import Home from "./pages/Home";
import CreateArticle from "./pages/CreateArticle";
import WelcomePage from "./pages/WelcomePage";
import NotFound from "./pages/NotFound";
import EditArticle from "./pages/EditArticle";

const API_URL = "https://guestbook.devhudi.xyz/";
//API URL을 props로 넘겨줌

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/:ownerId" element={<Home apiUrl={API_URL} />} />
        <Route
          path="/:ownerId/create"
          element={<CreateArticle apiUrl={API_URL} />}
        />
        <Route
          path="/articles/:articleId"
          element={<Article apiUrl={API_URL} />}
        />
        <Route
          path="/articles/:articleId/edit"
          element={<EditArticle apiUrl={API_URL} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
