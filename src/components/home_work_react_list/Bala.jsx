import{ seaPlaners }from '../../Nd_04_lists';

function Bala() {
    const listas = seaPlaners.map((value, i) => (
        <div key={i}>
            {value.id}, {value.type},  <span style={{color: value.color}}>{value.name}</span>
        </div>
    ))
    return listas;
}
export default Bala;