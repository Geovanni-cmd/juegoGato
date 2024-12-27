import Cuadrado from "./Cuadrado";
const Tabla = () => {
    return (
        <>
            <div className="board-row">
                <Cuadrado />
                <Cuadrado />
                <Cuadrado />
            </div>
            <div className="board-row">
                <Cuadrado />
                <Cuadrado />
                <Cuadrado />
            </div>
            <div className="board-row">
                <Cuadrado />
                <Cuadrado />
                <Cuadrado />
            </div>
        </>
    );
}

export default Tabla;