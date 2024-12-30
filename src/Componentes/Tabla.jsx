import { useState } from "react";
import Cuadrado from "./Cuadrado";


const Tabla = () => {
    const [xEsSiguiente, setEsSiguiente] = useState(true);
    const [cuadros, setCuadros] = useState(Array(9).fill(null));



    function handleClick(i){
        if(cuadros[i] || calculaGanador(cuadros)){
            return;
        }
        const siguienteCuadrado =  cuadros.slice();
        if ( xEsSiguiente ) {
            siguienteCuadrado[i] = "X"
        } else {
            siguienteCuadrado[i] = "O"
        }
        setCuadros(siguienteCuadrado);
        setEsSiguiente(!xEsSiguiente);
    }


    const ganador = calculaGanador(cuadros);
    let status;
    if(ganador){
        status = "Ganador: " + ganador;
    } else {
        status = "Siguiente Jugador: " + (xEsSiguiente ? "X" : "O");
    }

    return (
        <>
        <div className="status">{status}</div>
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

function calculaGanador(cuadros){
    const lineas = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for (let i = 0; i < lineas.length; i++){
        const [a, b, c] = lineas[i];
        if(cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]){
            return cuadros[a];
        }
    }
}



export default Tabla;