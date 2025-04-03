import React from 'react'

function AlertPop() {
    const handleClick =()=>{
        alert("Sachin")
    }
  return (
    <div>
      <button onClick={handleClick}>For alert</button>
    </div>
  )
}

export default AlertPop
