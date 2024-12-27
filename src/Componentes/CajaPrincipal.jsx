
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



            <br />
            <div className="reinicio"> 
                <button>Reiniciar partida</button>
            </div>
        </div>
    );
}

export default CajaPrincipal;