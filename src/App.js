import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./Pages/About";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Books from "./components/Books"

function App() {
  

  return (
    <BrowserRouter>
    <div className="App">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/profile">Profile</a>
      
    </div>
    <Routes>
      <Route path="/about" element={<About /> } />
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile /> } />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
