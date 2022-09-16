import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';


function App() { 

  return (
    <div className="App">
        <BrowserRouter>
      < Navbar />
      <Routes>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
        
    </div>
  );
}


export default App
