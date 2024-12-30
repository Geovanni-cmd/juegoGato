import { useState } from 'react';

const Cuadrado = ({ value, cuadradoClick }) => {
    /*const [valor, setValor] = useState(null)

    function handleClick(){
        setValor('X')
    }*/

    return (
        <button className='cuadrado' onClick={cuadradoClick}>{value}</button>
    );


    /*( 
        <>
            <button 
                className="cuadrado" 
                onClick={handleClick}
            >
                 {valor} 
            </button>
        </>
     );}*/
}

export default Cuadrado;