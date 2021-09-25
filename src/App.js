import './App.css';
import React, { Component } from 'react';
import Counters from './components/counters';
import Navbar from './components/navbar';

  
class App extends Component {
    
state = { 
  counters:[
      {id: 1, value:4},
      {id: 2, value:0},
      {id: 3, value:0},
      {id: 4, value:0}
  ]
};

handleReset = () =>{
  const counters=[...this.state.counters];
  
  counters.map(c =>{
      c.value=0;
  });

  this.setState({counters});
}

handelDelete = counterID =>{
  const counters = this.state.counters.filter(c => c.id !== counterID);
  this.setState({counters: counters});
}

handelIncrement = counter =>{

  const counters =[...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index].value+=1;
  this.setState({ counters});
}

  render() { 
    
    return (
        
    <div className="App">
    <Navbar totalCounters={this.state.counters.filter(c=> c.value>0).length}/>      
    <Counters
      counters={this.state.counters}
      onReset={this.handleReset}
      onDelete={this.handelDelete}
      onIncrement={this.handelIncrement}
    />
    </div>

    );
  }
}
 
export default App;
