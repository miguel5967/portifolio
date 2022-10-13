import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Homepage from "./HomePage";


function Layout(props: any) {
  let currentLoc = useLocation().pathname;
 const gif =  <Homepage  />  ;

  return (
    <div className="">
    <Navbar isDarkMode={props.isDarkMode} setDarkMode={props.setDarkMode} />
    <Outlet />
    {currentLoc == '/' && gif}
  </div>
  );  
}

export default Layout;
