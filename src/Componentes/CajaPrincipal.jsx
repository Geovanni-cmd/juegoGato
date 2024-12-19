
const CajaPrincipal = () => {
    const [show, setShow] = useState(true);
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
            <table className="table-fixed border-separate border border-slate-500 ...">
                <tbody>
                    <tr>
                        <td className="border border-slate-600 ...">1</td>
                        <td className="border border-slate-600 ...">asdasdas</td>
                        <td className="border border-slate-600 ...">3</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600 ...">4</td>
                        <td className="border border-slate-600 ...">5</td>
                        <td className="border border-slate-600 ...">asdas</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600 ...">asdasdhksjahdkajshdkjashdkjahs</td>
                        <td className="border border-slate-600 ...">8</td>
                        <td className="border border-slate-600 ...">9</td>
                    </tr>
                </tbody>
            </table>

            


            <br />
            <div className="reinicio"> 
                <button>Reiniciar partida</button>
            </div>
        </div>
    );
}

export default CajaPrincipal;