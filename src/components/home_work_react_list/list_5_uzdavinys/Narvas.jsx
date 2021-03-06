import { seaPlaners } from "../../../Nd_04_lists";
function Narvas({lyginis}) {

    if (lyginis) {
    return seaPlaners.map((value) => value.type === 'animal' && value.id % 2 === 0 ? (
        <div key={value.id} >
        {value.id}, {value.type},  <span style={{color: value.color}}>{value.name}</span>
        </div>
            ) : null);
    }else 
    {
        return seaPlaners.map((value) => value.type === 'animal' && value.id % 2 !== 0 && (
            <div key={value.id} >
            {value.id}, {value.type},  <span style={{color: value.color}}>{value.name}</span>
            </div>
                ));
    }
}

export default Narvas;