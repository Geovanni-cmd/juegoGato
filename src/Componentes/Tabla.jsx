import { useState } from "react";
import Cuadrado from "./Cuadrado";


const Tabla = () => {
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    
    function handleClick(i){
        const siguienteCuadrado =  cuadros.slice();
        siguienteCuadrado[i] = "X"
        setCuadros(siguienteCuadrado);
    }

    return (
        <>
            <div className="board-row">
                <Cuadrado value= {cuadros[0] } cuadradoClick={ () => handleClick(0)} />
                <Cuadrado value= {cuadros[1] } cuadradoClick={ () => handleClick(1)}/>
                <Cuadrado value= {cuadros[2] } cuadradoClick={ () => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Cuadrado value= {cuadros[3] } cuadradoClick={ () => handleClick(3)}/>
                <Cuadrado value= {cuadros[4] } cuadradoClick={ () => handleClick(4)}/>
                <Cuadrado value= {cuadros[5] } cuadradoClick={ () => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Cuadrado value= {cuadros[6] } cuadradoClick={ () => handleClick(6)}/>
                <Cuadrado value= {cuadros[7] } cuadradoClick={ () => handleClick(7)}/>
                <Cuadrado value= {cuadros[8] } cuadradoClick={ () => handleClick(8)}/>
            </div>
        </>
    );
}

export default Tabla;