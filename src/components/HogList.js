import React, {useState} from "react";
import HogTile from "./HogTile"

function HogList({hogs, filterHogs}){

    // function filterHogs(hogs){
    //     const filteredHogs = hogs.filter((hog) => {
    //         setHogList((hog.greased))
    //         console.log(filteredHogs)
    //     })
    // }
        
    const hogArray = hogs.map((hog) => (
        <HogTile
        key={hog.name}
        name={hog.name}
        image={hog.image}
        specialty={hog.specialty}
        greased={hog.greased}
        weight={hog.weight}
        medal={hog["highest medal achieved"]}
        />
    ))
    return (
   
        <div>
         <button>Show Greased Pigs</button>
        {hogArray}
        </div>
    )

}

export default HogList