import React from "react";
import Nav from "./Nav";
import HogList from "./HogList"
import hogs from "../porkers_data";


function App() {
  // const [greased, setGreased] = useState(false)
  // const greasyHogs = hogs.filter((hog)=> (greased ? hog.greased : true))
  
  
  // const [hogList, setHogList] = useState(hogs)

//   function filterHogs(){
//         setHogList(greasyHogs)
// }

  return (
    <div className="App">
      <Nav />
      <HogList hogs={hogs}/>
    </div>
  );
}

export default App;
