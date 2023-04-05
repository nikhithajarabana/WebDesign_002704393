import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Jobs from "./components/Jobs/Jobs";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> {"       "}
        <Link to="/aboutus">About Us</Link>
        {"       "}
        <Link to="/jobs">Jobs</Link>
        {"       "}
        <Link to="/contact">Contact</Link>
        {"       "}
        
        <Link to="/login">Login</Link>
        {"       "}
       

      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/Jobs" element={<Jobs />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        
      </Routes>
      <footer></footer>
    </Router>
    
  );
}

export default App;
