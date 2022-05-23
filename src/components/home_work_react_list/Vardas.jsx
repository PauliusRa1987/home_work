import { seaPlaners } from "../../App";
function Vardas() {
    return (
        seaPlaners.sort((a, b) => a.name.localeCompare(b.name)).map((value, i) =>(
            <div key={i} >
            {value.id}, {value.type},  <span style={{color: value.color}}>{value.name} -- {value.color}</span>
            </div>
                ))
    )
}

export default Vardas;