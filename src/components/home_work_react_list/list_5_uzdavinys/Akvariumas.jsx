import { seaPlaners } from "../../../App";

function Akvariumas({lyginis}) {
    if(lyginis){ 
    return seaPlaners.map((value, i) => value.type === 'fish' && value.id % 2 === 0 ? (
        <div key={value.id} >
        {value.id}, {value.type},  <span style={{color: value.color}}>{value.name}</span>
        </div>
            ) : <></>);
    }else{
        return seaPlaners.map((value, i) => value.type === 'fish' && value.id % 2 !== 0 ? (
            <div key={value.id} >
            {value.id}, {value.type},  <span style={{color: value.color}}>{value.name}</span>
            </div>
                ) : <></>);
    }
}

export default Akvariumas;