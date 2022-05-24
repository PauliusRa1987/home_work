import { seaPlaners } from "../../../App";

function Namas({lyginis}) {
    if (lyginis) {
        return seaPlaners.map((value, i) => value.type === 'man' && value.id % 2 === 0 ? (
        <div key={i} >
        {value.id}, {value.type},  <span style={{color: value.color}}>{value.name}</span>
        </div>
            ) : null);
    }
        return seaPlaners.map((value, i) => value.type === 'man' && value.id % 2 !== 0 ? (
            <div key={i} >
            {value.id}, {value.type},  <span style={{color: value.color}}>{value.name}</span>
            </div>
                ) : null);
    
    
}

export default Namas;