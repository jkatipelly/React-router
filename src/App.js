import { Route, Routes } from "react-router-dom";
import { About } from "./Components/About";
import { Home } from "./Components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/About" element={<About></About>}></Route>
    </Routes>
  );
}

export default App;
