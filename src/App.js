import { Routes, Route } from "react-router-dom";
import { First } from "./components/First/First";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/first" element={<First />} />
    </Routes>
  );
}

export default App;
