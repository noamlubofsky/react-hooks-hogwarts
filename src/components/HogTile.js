import {useState} from "react";

function HogTile({name, image, specialty, greased, weight, medal}){

    const [details, setDetails] = useState(false)

    return(
        <div onClick={() => setDetails(!details)}
        // (its **specialty**, **weight**, **greased**, and **highest medal
        //     achieved**)
        className="pigTile">
        
        <h3>{name}</h3>
        <img src={image}/>
        
 
    {details ? <h2>Specialty: {specialty}</h2> : null}
    {details ? <h2>Weight: {weight}</h2> : null}
    {details ? <h2> {greased ? "Greased" : "Not Greased"}</h2> : null}
    {details ? <h2>highest medal achieved: {medal}</h2> : null}
 
         
        
        </div>
    )
}

export default HogTile
