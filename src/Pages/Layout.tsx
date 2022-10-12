import { render } from "@testing-library/react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Homepage from "./HomePage";


function Layout(props: any) {
  let currentLoc = useLocation().pathname;
 const gif =  <Homepage  />  ;


 if(currentLoc == "/")
 {
  return (
  <div className="">
    <Navbar isDarkMode={props.isDarkMode} setDarkMode={props.setDarkMode} />
    <Outlet />
    {gif}
  </div>
);
 }
 else{
  return (
    <div className="">
    <Navbar isDarkMode={props.isDarkMode} setDarkMode={props.setDarkMode} />
    <Outlet />
  </div>
  );
 }
  
}

export default Layout;
