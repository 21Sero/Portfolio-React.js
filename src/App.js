import "./styles/main.css"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
        <Router>
            <ScrollToTop/>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/project/:id" element={<Project />}/>
                <Route path="/Contacts" element={<Contacts />}/>
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
