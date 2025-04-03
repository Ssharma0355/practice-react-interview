import React,{useEffect, useState} from 'react'

function FetchData() {
    const [data,setData] = useState([]);
   useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/users")
       .then(response => response.json())
       .then(data => setData(data))
   },[]);
  return (
    <div>
        <ul>
            {data.map(user=>(
              <li key={user.id}>{user.name}</li>  
            ))}
        </ul>

      
    </div>
  )
}

export default FetchData
