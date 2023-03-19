import React from "react";

const DisplayModelInfo = (props) => {
    return(
        <>
            <div>
                <p>{props.name}</p>
                <p>{props.abrv}</p>
                <p>{props.makeId}</p>
            </div>
        </>
    )
}

export default DisplayModelInfo