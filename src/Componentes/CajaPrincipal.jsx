
const CajaPrincipal = () => {
    return (
        <div>
            <div className="turno">
                <div className="Columnas">
                    <div className="cajas">
                        <div className=""> X - </div>
                        <div className=""> O - </div>
                    </div>
                </div>
                <div className="Turno de -">  Turno de no se quien</div>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                    </tr>
                </tbody>
            </table>
            <div className="reinicio"> 
                <button>Reiniciar partida</button>
            </div>
        </div>
    );
}

export default CajaPrincipal;