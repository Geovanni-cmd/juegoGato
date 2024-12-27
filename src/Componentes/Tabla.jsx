import { useState } from "react";
import Cuadrado from "./Cuadrado";


const Tabla = () => {
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    return (
        <>
            <div className="board-row">
                <Cuadrado value= {cuadros[0] } />
                <Cuadrado value= {cuadros[1] } />
                <Cuadrado value= {cuadros[2] } />
            </div>
            <div className="board-row">
                <Cuadrado value= {cuadros[3] } />
                <Cuadrado value= {cuadros[4] } />
                <Cuadrado value= {cuadros[5] } />
            </div>
            <div className="board-row">
                <Cuadrado value= {cuadros[6] } />
                <Cuadrado value= {cuadros[7] } />
                <Cuadrado value= {cuadros[8] } />
            </div>
        </>
    );
}

export default Tabla;