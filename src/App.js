import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/hello" element={<>Hello, World!</>} />
        <Route path="/welcome/:name" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
