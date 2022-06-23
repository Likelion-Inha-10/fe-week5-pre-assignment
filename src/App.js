import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Owner from "./pages/Owner";
import CreateArticle from "./pages/CreateArticle";
import Article from "./pages/Article";
import EditArticle from "./pages/EditArticle";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/hello" element={<>Hello, World!</>} />
        <Route path="/welcome/:name" element={<WelcomePage />} />
        <Route path="/:ownerId" element={<Owner />} />
        <Route path="/:ownerId/create" element={<CreateArticle />} />
        <Route path="/articles/:articleId" element={<Article />} />
        <Route path="/articles/:articleId/edit" element={<EditArticle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
