import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Models from "./pages/Models";
import EMI from "./pages/EMI";
import TestRide from "./pages/TestRide";
import Contact from "./pages/Contact";
import MotorcycleList from "./pages/MotorcycleList";
import Service from "./pages/Service.js";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/emi" element={<EMI />} />
        <Route path="/test-ride" element={<TestRide />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/motorcycles" element={<MotorcycleList />} />
        <Route path="/services" element={<Service />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
