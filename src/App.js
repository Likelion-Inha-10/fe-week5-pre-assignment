import { Routes, Route } from "react-router-dom";
import Article from "./pages/Article";
import CreateArticle from "./pages/CreateArticle";
import EditArticle from "./pages/EditArticle";
import NotFound from "./pages/NotFound";
import Owner from "./pages/Owner";

const API_URL = "https://guestbook.devhudi.xyz";

const App = () => {
  return (
    <Routes>
      <Route path="/:ownerId" element={<Owner apiUrl={API_URL} />} />
      <Route
        path="/:ownerId/create"
        element={<CreateArticle apiUrl={API_URL} />}
      />
      <Route
        path="/:ownerId/:articleId"
        element={<Article apiUrl={API_URL} />}
      />
      <Route
        path="/:ownerId/:articleId/edit"
        element={<EditArticle apiUrl={API_URL} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
