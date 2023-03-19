import React from "react";

const DisplayVehicleMake = (props) => {
    return (
        <>
            <li>Name : {props.name}, Abrv : {props.abrv}
            </li>
        </>
    )
}

export default DisplayVehicleMake;