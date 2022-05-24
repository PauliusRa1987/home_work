import{ seaPlaners }from '../../App';

function Daiktas({lyginis}) {
        if (lyginis) {
        return seaPlaners.map((value, i) => value.id % 2 === 0 ? (
        <div key={i} >
        {value.id}, {value.type},  <span style={{color: value.color}}>{value.name}</span>
        </div>
            ) : null);
}else{
        return seaPlaners.map((value, i) => value.id%2!==0? (
        <div key={i} >
        {value.id}, {value.type},  <span style={{color: value.color}}>{value.name}</span>
        </div>
            ) : null);
  }      
    
}
export default Daiktas;