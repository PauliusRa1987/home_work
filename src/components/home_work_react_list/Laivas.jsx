import{ seaPlaners }from '../../App';
function Laivas() {
    return seaPlaners.map((value, i) => value.type === 'car' ? (
        <div key={i} >
        {value.id}, {value.type},  <span  style={{color: value.color}}>{value.name}</span>
        </div>
            ) : <></>);
}
export default Laivas;