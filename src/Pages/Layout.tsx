import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


function Layout (props: any){
    return(
        <div className="">
            <Navbar isDarkMode={props.isDarkMode} setDarkMode={props.setDarkMode}/>
            <Outlet />
        </div>
    )
}

export default Layout;