import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Company from "./pages/Company";
import ContactUs from "./pages/ContactUs";
import { Toaster } from "react-hot-toast";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
