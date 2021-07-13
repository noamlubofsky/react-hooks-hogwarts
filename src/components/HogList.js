import React, {useState} from "react";
import HogTile from "./HogTile"

function HogList({hogs}){

    const [myHogs, setMyHogs] = useState(hogs)
    //filter/setFilter state - making the checkbox a controlled component
    //(not necessary but safer)
    // const [filter, setFilter] = useState(false)

    function handleFilter(e){
        const isChecked = e.target.checked
        
        // setFilter(isChecked)

        setMyHogs(hogs.filter((hog) => {
            if (isChecked)
                return hog.greased === true
            else
                return true
        }))
    }
    
    function sortByName(e){
    let hogsToDisplay = hogs.filter((hog) => {
        return(
      hog.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      })
      setMyHogs(hogsToDisplay)
    }

    function sortByWeight(e){
    let newHogsToDisplay = hogs.filter((hog) => {
        const hogWeight = hog.weight.toString()
        return (
            hogWeight.includes(e.target.value)
            )
        
      })
      setMyHogs(newHogsToDisplay)
    }

        
    const hogArray = myHogs.map((hog) => (
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
        <input type="text" name="name" placeholder="Sort by Name..." onChange={sortByName} />
        <input type="text" name="weight" placeholder="Sort by Weight..." onChange={sortByWeight}/>
        <div>Only Show Greased Pigs: <input onChange={handleFilter} type="checkbox"/></div>
        {hogArray}
        </div>
    )

}

export default HogList