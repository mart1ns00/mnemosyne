import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NewMemory from "./pages/home/new-memory";
import Memory from "./pages/memory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new-memory" element={<NewMemory/>} />
        <Route path="/memory" element={<Memory/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
