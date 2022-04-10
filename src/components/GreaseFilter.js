import react from "react";

function GreaseFilter({greaseClick, filterValue }){


  const filter =
  <div>
    <button onClick = {greaseClick} value = {filterValue}> Greased</button>
  </div>


  return(
    filter
  )

}

export default GreaseFilter