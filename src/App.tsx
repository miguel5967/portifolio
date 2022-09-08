import React from 'react';
import './App.css';
import Button from './Components/Buttons';
import Canvas from './Components/Canvas';

// function ComponentDidMount() {
//   let canvas = document.getElementById('game');
//   let context = canvas.getContext('2d');
// }


function App(props: any) { 
  
  console.log("screen: " );
  return (
    <div className="App">
      <Canvas />
      <Button />
    </div>
  );
}

export default App;
