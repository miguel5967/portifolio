import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Tabs } from "@mantine/core";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function Navbar(props: any) {
  const [parent, somebool] = useAutoAnimate();
  return (
    <nav className="gap-14 px-6 flex  border-black border-b-2 pb-2 w-full pt-3 justify-between">
      <div className="mt-2 flex flex-1 justify-between">
        <div className={`flex-1 flex gap-4`}>
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
        <div className="-mt-1">
          <DarkModeSwitch
            checked={props.isDarkMode}
            onChange={props.setDarkMode}
            size={28}
          />
        </div>
      </div>

      <Tabs defaultValue="Homepage">
        <Tabs.List>
          <ul
            className="flex-initial flex gap-14"
            ref={parent as React.RefObject<HTMLUListElement>}
          >
            <li>
              <Link to="/">
                <Tabs.Tab value="Homepage" className="navButton">
                  Homepage
                </Tabs.Tab>
              </Link>
            </li>
            <li>
              <Link to="/Projects">
                <Tabs.Tab value="Projects" className="navButton">
                  Projects
                </Tabs.Tab>
              </Link>
            </li>
            <li>
              <Link to="/Contact">
                <Tabs.Tab value="Contact" className="navButton">
                  Contact
                </Tabs.Tab>
              </Link>
            </li>
            <li>
              <Link to="/About">
                <Tabs.Tab value="About" className="navButton">
                  About
                </Tabs.Tab>
              </Link>
            </li>
          </ul>
        </Tabs.List>
      </Tabs>
    </nav>
  );
}

export default Navbar;
