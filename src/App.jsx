import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Main from "./Components/Main/Main";
import NavBar from "./Components/NavBar/NavBar";
import ConstructionPage from "./Components/ConstructionPage/ConstructionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<ConstructionPage />} />
        <Route path="/messages" element={<ConstructionPage />} />
        <Route path="/photos" element={<ConstructionPage />} />
        <Route path="/settings" element={<ConstructionPage />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
