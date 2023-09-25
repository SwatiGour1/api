
// import React, { Component } from 'react'
// import Tododata from './Component/Tododata'
// import Todoitem from './Component/Todoitem'

// export class App extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        todos:Tododata
//     }
//     this.handleChange=this.handleChange.bind(this)
//   }
//   handleChange(id){
//     this.setState(prevState=>{
//       const updated=prevState.todos.map(todo=>{
//         if(todo.id===id){
//           todo.completed=!todo.completed
//         }
//         return todo
//       }) 
//       return{
//         todos:updated
//       }
//     })
//   }
//   render() {
// const todocomponent=this.state.todos.map(item=><Todoitem key={item.id} text={item.text} completed={item.completed} handleChange={this.handleChange}></Todoitem>)

//     return (
//       <div>
//      {/* {todocomponent} */}

//       </div>
//     )
//   }
// }

// export default App
import React from 'react'
import Incredecre from './Component/Incredecre'

function App() {
  return (
    <div>
      <Incredecre></Incredecre>
    </div>
  )
}

export default App
