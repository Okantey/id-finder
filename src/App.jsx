import { Login, Register, Home } from "./pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
