import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Tabs } from "@mantine/core";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function Navbar() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };
  const [parent, somebool] = useAutoAnimate();
  return (
    <nav className="gap-14 px-6 flex flex-row-reverse border-black border-b-2 pb-2 w-full pt-3 justify-between">
      <Tabs defaultValue="Homepage">
        <Tabs.List>
          <ul
            className="flex-initial flex gap-14"
            ref={parent as React.RefObject<HTMLUListElement>}
          >
            <li>
              <Link to="/">
                <Tabs.Tab value="Homepage">Homepage</Tabs.Tab>
              </Link>
            </li>
            <li>
              <Link to="/Projects">
                <Tabs.Tab value="Projects">Projects</Tabs.Tab>
              </Link>
            </li>
            <li>
              <Link to="/Contact">
                <Tabs.Tab value="Contact">Contact</Tabs.Tab>
              </Link>
            </li>
            <li>
              <Link to="/About">
                <Tabs.Tab value="About">About</Tabs.Tab>
              </Link>
            </li>
          </ul>
        </Tabs.List>
      </Tabs>

      <div>
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={24}
      />
      </div>

      <div className={`flex-1 flex gap-4 ${isDarkMode ? "bg-black" : ""}`}>
        <a target="_blank" href="https://www.facebook.com/1Treeckos/">
          <FaFacebook size={28} />
        </a>

        <a target="_blank" href="https://twitter.com/1Treeckos">
          <FaTwitter size={28} />
        </a>

        <a target="_blank" href="https://www.instagram.com/1Treeckos/">
          <FaInstagram size={28} />
        </a>

        <a
          target="blank"
          href="https://www.linkedin.com/in/luis-ferreira-93713986/"
        >
          <FaLinkedin size={28} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
