import{ seaPlaners }from '../../Nd_04_lists';
function Valtis() {
    return seaPlaners.map((value, i) => value.type === 'man' ? (
        <div key={i} >
        {value.id}, {value.type},  <span style={{color: value.color}}>{value.name}</span>
        </div>
            ) : null);
}

export default Valtis;