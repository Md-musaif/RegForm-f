import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
