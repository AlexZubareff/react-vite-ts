import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/Mainlayout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import NotFound from "./pages/Notfound";
import Boards from "./pages/Boards";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="boards" element={<Boards />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
