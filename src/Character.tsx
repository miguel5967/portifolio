import character from "./Images/Character_Idle.gif"

function CalculateMovement(props: any): void {
    

}

function Character() {

    
   return( 
        <div className="flex pt-3">
            <img src={character} ></img>
        </div>
   )
}

export default Character;