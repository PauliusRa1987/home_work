import Spalva from "./Spalva";
import Tipas from "./Tipas";
import Vardas from "./Vardas";

function Vandenynas() {
    return (
        <>
        <h1>Ketvirtas uzdavinys</h1>
        <h3>Pagal spalva</h3>
        <Spalva/>
        <h3>Pagal tipa</h3>
        <Tipas/>
        <h3>Pagal Varda</h3>
        <Vardas/>
        </>
    )
}

export default Vandenynas;