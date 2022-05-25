import{ seaPlaners }from '../../Nd_04_lists';
function Laivas() {
    return seaPlaners.map((value, i) => value.type === 'car' ? (
        <div key={i} >
        {value.id}, {value.type},  <span  style={{color: value.color}}>{value.name}</span>
        </div>
            ) : null);
}
export default Laivas;