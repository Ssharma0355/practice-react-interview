import React from 'react'

function SideBar(props) {
  return (
    <div>
      <h1>{props.name === "Sachin" ? "name is there":"not there"}</h1> 
    </div>
  )
}

export default SideBar
