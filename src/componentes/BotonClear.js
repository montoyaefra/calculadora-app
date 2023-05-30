import React from "react"
import "../assets/BotonClear.css"

const BotonClear = (props)=>{

    return(
        <div className="boton-clear" onClick={props.manejarClear}>
            {props.children}
        </div>
    )
}

export default BotonClear
// no es necesario usar props.children porque no va cambiar siempre llevara el texto clear