import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<AboutUs />} />
        <Route path="/Company" element={<AboutUs />} />
        <Route path="/Contact" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
