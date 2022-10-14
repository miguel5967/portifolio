import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Layout from "./Pages/Layout";
import { useState } from "react";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import {store} from "./Store"


function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  const changeDarkMode = () => {
    setDarkMode((previous) => !previous);
  };

 
  
  return (
    <Provider store={store}>
      <MantineProvider
        theme={{ colorScheme: isDarkMode ? "dark" : undefined }}
        withGlobalStyles
        withNormalizeCSS
      >
        <div className={`App ${isDarkMode ? "dark" : undefined}`}>
          <BrowserRouter>
            <Routes>
              <Route 
                path="/"
                element={
                  <Layout isDarkMode={isDarkMode} setDarkMode={changeDarkMode}  />
                }
              >
                <Route path="Projects" element={<Projects />}  />
                <Route path="About" element={<About />} />
                <Route path="Contact" element={<Contact />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </MantineProvider>
    </Provider>
  );
}

export default App;
