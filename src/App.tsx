import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Layout from './Pages/Layout';


function App(state: any) { 
  return (
    <div className={`App ${state.isDarkMode ? "bg-black" : ""}`}>
        <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="Projects" element={<Projects />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
          </Route>
      </Routes>
    </BrowserRouter>
        
    </div>
  );
}


export default App
