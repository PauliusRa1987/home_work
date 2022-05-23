import { seaPlaners } from "../../App";
function Tipas() {
    return (
        seaPlaners.sort((a, b) => a.type.localeCompare(b.type)).map((value, i) =>(
            <div key={i} >
            {value.id}, {value.type},  <span style={{color: value.color}}>{value.name} -- {value.color}</span>
            </div>
                ))
    )
}

export default Tipas;