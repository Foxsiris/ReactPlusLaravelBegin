import React from "react";
import ContexData from "../../context/Data/ContextData";


function General(){
    const {stateData} = React.useContext(ContexData)
    console.log(stateData)
    return(
        <div>
            General
        </div>
    )
}

export default General