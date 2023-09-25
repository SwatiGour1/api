import React,{useState} from 'react'

function Incredecre() {
    const[count,setcount]=useState(0)
  return (
    <div>
        <h1>Project 2</h1>
        <p>{count}</p>
        <button onClick={()=>setcount(count+1)}>Increament</button>
        <button onClick={()=>setcount(count-1)}>Decreament</button>

    </div>
  )
}

export default Incredecre