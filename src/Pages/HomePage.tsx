import Character from "../Character";
import Button from "../Components/Button";

function Homepage(props: any) {
  return (
    <div id="myCanvas" className="flex-col justify-center h-full bg-white">
      <div className="flex">
        <Button />
        <Button />
        <Button />
      </div>

      <div className="flex">
        <Character />
      </div>
    </div>
  );
}

export default Homepage;