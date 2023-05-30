
import './App.css';
import Boton from "./componentes/Boton"
import Pantalla from './componentes/pantalla'; 
import BotonClear from "./componentes/BotonClear"
import { useState } from 'react';
import {evaluate} from "mathjs"


function App() {
  const [input, setInpunt] = useState("");

  const agregarInpunt = valor => {
    setInpunt(input + valor);
  }

  const CalcularResultado = () => {
    if (input){
      setInpunt(evaluate(input))
    }else{
      alert("ingresa valores para realizar los calculos")
    }
    
  }

  return (
    <div className="App">
      <div className='contenedor-calculadora'>
        <Pantalla  input={input}/>
      <div className="fila">
        <Boton manejarClic={agregarInpunt}>1</Boton>
        <Boton manejarClic={agregarInpunt}>2</Boton>
        <Boton manejarClic={agregarInpunt}>3</Boton>
        <Boton manejarClic={agregarInpunt}>+</Boton>
      </div>
        <div className="fila">
        <Boton manejarClic={agregarInpunt}>4</Boton>
        <Boton manejarClic={agregarInpunt}>5</Boton>
        <Boton manejarClic={agregarInpunt}>6</Boton>
        <Boton manejarClic={agregarInpunt}>-</Boton>
        </div>
        <div className="fila">
        <Boton manejarClic={agregarInpunt}>7</Boton>
        <Boton manejarClic={agregarInpunt}>8</Boton>
        <Boton manejarClic={agregarInpunt}>9</Boton>
        <Boton manejarClic={agregarInpunt}>*</Boton>
        </div>
        <div className="fila">
        <Boton manejarClic={CalcularResultado}>=</Boton>
        <Boton manejarClic={agregarInpunt}>0</Boton>
        <Boton manejarClic={agregarInpunt}>.</Boton>
        <Boton manejarClic={agregarInpunt}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={()=> setInpunt("")}>
            Clear
            </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
