
import { Route, Routes } from "react-router-dom"
import Navbar from "./component/Navbar";

import Home from "./pages/Home";
import Links from "./pages/Link";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/link" element={<Links />} />
    </Routes>
    </>
  );
}

export default App;
