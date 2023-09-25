import React, { Component } from 'react'

export class Classcomponentpro extends Component {
    
  render() {
    var date=new Date();
    var hours=date.getHours();
    let timenof;
    if(hours<12){
        timenof="Good morning";
    }
    else if(hours>12&&hours<17){
        timenof="Good afternoon";
    }
    else{
        timenof="Good night";
    }
    return (
      <div>
        <h1>hello,{timenof} {this.props.name}</h1>
      </div>
    )
  }
}

export default Classcomponentpro