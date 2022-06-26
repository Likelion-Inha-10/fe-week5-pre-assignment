import { BrowserRouter, Routes, Route } from "react-router-dom";
import Owner from "./pages/Owner";
import Article from "./pages/Article";
import EditArticle from "./pages/EditArticle";
import NotFound from "./pages/NotFound";
import CreateArticle from "./pages/CreateArticle";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:ownerId" element={<Owner />} />
        <Route path="/:ownerId/create" element={<CreateArticle />} />
        <Route path="/:ownerId/:articleId" element={<Article />} />
        <Route path="/:ownerId/:articleId/edit" element={<EditArticle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
