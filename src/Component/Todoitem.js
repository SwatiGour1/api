import React from 'react'

function Todoitem(props) {
  return (
    <div>
        <input type='checkbox' checked={props.completed} onChange={()=>props.handleChange(props.id)}></input>
        <p>{props.text}</p>
    </div>
  )
}

export default Todoitem