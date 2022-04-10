import React from 'react'
import Hog from './Hog'


function Hoglist ({listhogs}){

  const hogs = listhogs.map((hog)=> 
  < Hog 
  key = {hog.name} 
  name = {hog.name} 
  image = {hog.image}
  achieved = {hog.["highest medal achieved"]}
  weight ={hog.weight}
  specialty = {hog.specialty}
  greased = {hog.greased}
  />
  
  )
  return(
    <div class = "ui grid container">
      {hogs}
    </div>
  )
}

export default Hoglist