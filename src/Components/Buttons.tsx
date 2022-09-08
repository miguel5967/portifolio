import { Component, useState } from "react";
import { Link } from 'react-router-dom';

const [buttonText, setButtonText] = useState("");

class Button extends Component {
render(){
    return (
        <div>
            <Link to="/">
            <p>{buttonText}</p>
            </Link>
        </div>
    )
}
}
export default Button;