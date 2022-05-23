import Laivas from "./Laivas";
import Sala from "./Sala";
import Valtis from "./Valtis";
import{ seaPlaners }from '../../App';
function Jura() {
    return (
        <>
        <h3>Sala grazina</h3>
        <Sala/>
        <h3>Valtis grazina</h3>
        <Valtis/>
        <h3>Laivas grazina</h3>
        <Laivas/>
        <h3>Pati Jura grazina</h3>
        {
        seaPlaners.map((value, i) => value.type === 'fish' ? (
        <div key={value.id} >
        {value.id}, {value.type},  <span style={{color: value.color}}>{value.name}</span>
        </div>
            ) : <></>)
        
        }</>
    )
}

export default Jura;