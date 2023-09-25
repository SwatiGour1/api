import React, { Component } from 'react'

export class Constructorpractice extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fsloggedin:true
      }
    }
  render() {
    let word;
    if(this.state.fsloggedin){
        word='yes';
    }
    else{
        word='no';
    }
    return (
      <div>is state important to know {word}</div>
    )
  }
}

export default Constructorpractice