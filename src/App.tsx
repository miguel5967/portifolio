import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Layout from "./Pages/Layout";
import { useState } from "react";
import { MantineProvider } from "@mantine/core";

function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  const changeDarkMode = () => {
    setDarkMode((previous) => !previous);
  };
  return (
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
                <Layout isDarkMode={isDarkMode} setDarkMode={changeDarkMode} />
              }
            >
              <Route path="Projects" element={<Projects />} />
              <Route path="About" element={<About />} />
              <Route path="Contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </MantineProvider>
  );
}

export default App;
