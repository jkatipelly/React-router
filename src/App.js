import { Route, Routes } from "react-router-dom";
import { About } from "./Components/About";
import { Home } from "./Components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
}

export default App;
