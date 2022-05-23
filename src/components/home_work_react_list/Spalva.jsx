import { seaPlaners } from "../../App";
function Spalva() {
    return (
        seaPlaners.sort((a, b) => a.color.localeCompare(b.color)).map((value, i) =>(
            <div key={i} >
            {value.id}, {value.type},  <span style={{color: value.color}}>{value.name} -- {value.color}</span>
            </div>
                ))
    )
    
}

export default Spalva;