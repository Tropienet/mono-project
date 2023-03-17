import React from "react";

function DisplayVehicle(props) {

    return (
        <li>
            <h2>{props.name}</h2>
            <p>{props.abrv}</p>
        </li>
    )
}

export default DisplayVehicle;