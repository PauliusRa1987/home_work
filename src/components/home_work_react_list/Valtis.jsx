import{ seaPlaners }from '../../App';
function Valtis() {
    return seaPlaners.map((value, i) => value.type === 'man' ? (
        <div key={i} >
        {value.id}, {value.type},  <span style={{color: value.color}}>{value.name}</span>
        </div>
            ) : <></>);
}

export default Valtis;