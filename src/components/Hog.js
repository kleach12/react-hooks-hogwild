import React, {useState} from 'react'

function Hog({
  name,
  image,
  specialty,
  weight,
  achieved,
  greased}){

  const [extraInfo, setExtraInfo] = useState(false)

  function handleHogInfo(e){
    setExtraInfo((extraInfo) => !extraInfo)
  }

  const hogSpecialInfo = 
  <ul>
    <li class = "achievementText"> Specialty:{specialty}</li>
    <li class ="normalText"> Weight: {weight} lbs</li>
    <li class = "achievementText"> Awards: {achieved}</li>
    <li >{greased}</li>
  </ul>

  return (
    <div class =  "ui eight wide column">
      <div class = "pigTile" onClick = {handleHogInfo}>
        <div class = "largeHeader" >{name}</div>
        <img class ="hog-img" src={image} alt = {name}/>
        {extraInfo ? hogSpecialInfo : null}
      </div>
    </div>
  )
}

export default Hog