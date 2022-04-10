import React, {useState} from "react";
import Nav from "./Nav";
import Hoglist from "./Hoglist";
import  "../index.js"
import GreaseFilter from "./GreaseFilter";

import hogs from "../porkers_data";

function App() {
  //console.log(hogs)
  const [hogsArr, setHogsArr] = useState(hogs)
  const [hogfilter, setHogFilter] = useState(false)

  function handleClick(e){
    setHogFilter((hogfilter) => !hogfilter)
    filterHogs()
    console.log(hogfilter)
  }

  function filterHogs(){
    setHogsArr(hogsArr.filter((hog) => {
        if (hog.greased === hogfilter){
          console.log(hog)
          return true
        }
      }
    ))
  }

	return (
		<div className="App">
			<Nav />
      <GreaseFilter greaseClick = {handleClick} filterValue = {hogfilter}/>
      <div >
        <Hoglist  listhogs = {hogsArr}/>
      </div>
		</div>
	);
}

export default App;
