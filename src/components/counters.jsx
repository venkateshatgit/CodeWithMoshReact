import React, { Component } from 'react';
import Counter from './counter';
import "./counter.css"; 

class Counters extends Component {
    
    render() { 
        
        const {onReset, onDelete, onIncrement, counters} = this.props;

        return ( 
        <div>
            <button className="reset" onClick={onReset}>Reset</button>
            {counters.map(counter => (
            <Counter 
                key={counter.id} 
                counter={counter}
                onDelete={onDelete}
                onIncrement={onIncrement}
            />
            ))}
            
        </div> 
        );
    }
}
 
export default Counters;