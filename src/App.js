import { BrowserRouter, Routes, Route } from "react-router-dom";
import Owner from "./pages/Owner";
import CreateArticle from "./pages/CreateArticle";
import EditArticle from "./pages/EditArticle";
import NotFound from "./pages/NotFound";
import Article from "./pages/Article";

const API_HOST = "https://guestbook.devhudi.xyz";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:ownerId" element={<Owner host={API_HOST} />} />
        <Route
          path="/:ownerId/create"
          element={<CreateArticle host={API_HOST} />}
        />
        <Route
          path="/articles/:articleId"
          element={<Article host={API_HOST} />}
        />
        <Route
          path="/articles/:articleId/edit"
          element={<EditArticle host={API_HOST} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
