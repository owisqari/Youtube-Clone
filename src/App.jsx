import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<Videos />} />
      </Routes>
    </>
  );
}

export default App;
