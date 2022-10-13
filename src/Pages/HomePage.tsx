import Game from "../Games/Game";

function Homepage() {
  return (
    <div id="Container" className=" bg-white w-screen h-60">
      <div className="flex justify-end pr-10 bg-slate-600 ">
        <p>Points: 1000</p>
      </div>
      <Game />
    </div>
  );
}

export default Homepage;
