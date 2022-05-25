function Animal({name, image}) {
    const setBg = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        return "#" + randomColor;
      }
      
    return(
        <figure>
            <img style={{width: '75px'}} src={image} alt={name + '-animal'} />
            <figcaption style={{backgroundColor: setBg()}}>{name}</figcaption>
        </figure>
    )
}
export default Animal;