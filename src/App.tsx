import React, { useState } from 'react';
import './App.css';
import Button from './Components/Buttons';
import Canvas from './Components/Canvas';

// function ComponentDidMount() {
//   let canvas = document.getElementById('game');
//   let context = canvas.getContext('2d');
// }

function Home(props: any) {
  return (
    <div>Home</div>
  )
}
function About(props: any) {
  return (
    <div>About</div>
  )
}
function Contact(props: any) {
  return (
    <div>Contact</div>
  )
}

function App(props: any) { 
  const [page, setPage] = useState("home");
  
const Components = {
  'home': Home,
  'about': About,
  'contact': Contact,
}
var Component = Components.home;

  console.log(`Page: ${page}` );
  return (
    <div className="App">
      <Canvas setPage={setPage} />
      <Component />
    </div>
  );
}


export default App
