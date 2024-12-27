import {useState} from 'react';

const Cuadrado = () => {
    const [valor, setValor] = useState(null)

    function handleClick(){
        setValor('X')
    }

    return ( 
        <>
            <button 
                className="cuadrado" 
                onClick={handleClick}
            >
                 {valor} 
            </button>
        </>
     );
}
 
export default Cuadrado;