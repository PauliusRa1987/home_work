function Bebras({skaicius}) {
   let atspalvis = skaicius === 1 ? 'blue' : 'red';
    return(
        <h1 style={
            {
                color: atspalvis,
            }
        }>Zebrai ir Bebrai</h1>
    )
}
export default Bebras;