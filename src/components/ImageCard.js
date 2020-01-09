import React from "react";
import "./style.css"

// set properties
const Card = props => (    
        <div className = "card hvr-grow">
            <div className = "img-container">
                <img 
                alt={"This is image " + props.name} 
                src={props.image} 
                onClick = {() => props.checkIfClicked(props.id)}
                />
            </div>
        </div>
    );

export default Card;