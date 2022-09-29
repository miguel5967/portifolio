import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Canvas } from '@react-three/fiber'
import { Suspense } from "react"
import {Model} from "../Character_Idle"

function Layout (props: any){
    //react-three-fiber(threejs in typescript)    
    

    return(
        <div className="">
            <Navbar isDarkMode={props.isDarkMode} setDarkMode={props.setDarkMode}/>
            <Outlet />
            <div id="canvas">
               <Canvas>
               <ambientLight intensity={0.6} />
      <directionalLight intensity={0.5} />
      
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                </Canvas> 
            </div>
        </div>
    )
}

export default Layout;