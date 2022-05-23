import{ seaPlaners }from '../../App';

function Daiktas({lyginis}) {
        if (lyginis) {
        return seaPlaners.map((value, i) => value.id % 2 === 0 ? (
        <div key={i} >
        {value.id}, {value.type},  <span style={{color: value.color}}>{value.name}</span>
        </div>
            ) : <></>);
}else{
        return seaPlaners.map((value, i) => value.id%2!==0? (
        <div key={i} >
        {value.id}, {value.type},  <span style={{color: value.color}}>{value.name}</span>
        </div>
            ) : <></>);
  }      
    
}
export default Daiktas;