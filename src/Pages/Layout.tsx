import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import * as THREE from "three";


function Layout (props: any){
    //react-three-fiber(threejs in typescript)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight,0.1,2000);
    const renderer = new THREE.WebGLRenderer();

    console.log(scene);
    
    const canvas = document.getElementById('canvas');
    if(canvas){
        document.body.appendChild(canvas);
    }

    
    console.log(canvas);
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvas?.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial(
        {
            color: 'red',
        }
    );

    camera.position.z = 10;

    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    })

    

    return(
        <div className="">
            <Navbar isDarkMode={props.isDarkMode} setDarkMode={props.setDarkMode}/>
            <Outlet />
            <div id="canvas">
                
            </div>
        </div>
    )
}

export default Layout;