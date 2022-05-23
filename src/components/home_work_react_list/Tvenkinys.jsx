import Daiktas from "./Daiktas";

function Tvenkinys() {
    return (
        <>
        <h2>Lyginiai</h2>
        
        <Daiktas lyginis={true}/>
        <h2>neLyginiai</h2>
        <Daiktas lyginis={false}/>
        
        
        </>
    )
}

export default Tvenkinys;