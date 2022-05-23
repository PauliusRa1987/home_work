// import { seaPlaners } from "../../../App";
import Akvariumas from "./Akvariumas";
import Garazas from "./Garazas";
import Namas from "./Namas";
import Narvas from "./Narvas";
function Pasaulis() {
    return (
        <>
        <h2>Porine dalis</h2>
        <Namas lyginis={true}/>
        <Akvariumas lyginis={true}/>
        <Garazas lyginis={true}/>
        <Narvas lyginis={true}/>
        <h2>nePorine dalis</h2>
        <Namas lyginis={false}/>
        <Akvariumas lyginis={false}/>
        <Garazas lyginis={false}/>
        <Narvas lyginis={false}/>
        </>
    )
}

export default Pasaulis;