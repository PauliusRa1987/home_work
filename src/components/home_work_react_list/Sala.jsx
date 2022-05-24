import{ seaPlaners }from '../../App';
function Sala() {
    return seaPlaners.map((value, i) => value.type === 'animal' ? (
        <div key={value.id} >
        {value.id}, {value.type},  <span style={{color: value.color}}>{value.name}</span>
        </div>
            ) : null);
    
}

export default Sala;