import Navbar from "./components/Navbar";
import Index from "./components/index";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Member from "./components/Member"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/member" element={<Member />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
