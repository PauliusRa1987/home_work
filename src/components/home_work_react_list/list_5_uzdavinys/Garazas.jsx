import { seaPlaners } from "../../../App";

function Garazas({lyginis}) {
    if (lyginis) {
        
    
    return seaPlaners.map((value, i) => value.type === 'car' && value.id % 2 === 0 ? (
        <div key={value.id} >
        {value.id}, {value.type},  <span style={{color: value.color}}>{value.name}</span>
        </div>
            ) : null);
    }else{
        return seaPlaners.map((value, i) => value.type === 'car' && value.id % 2 !== 0  ? (
            <div key={value.id} >
            {value.id}, {value.type},  <span style={{color: value.color}}>{value.name}</span>
            </div>
                ) : null);  
    }
}
export default Garazas;