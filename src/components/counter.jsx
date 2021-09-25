import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {

    render() {
        return (
            <div>
                <span className={this.getClasses()}>{this.formateCount()}</span>
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="increment"
                >
                 Increment
                </button>

                <button className="delete" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
                
            </div>
        );
    }

    getClasses() {
        let classes = "formate ";
        classes += this.props.counter.value === 0 ? "warning" : "";
        return classes;
    }

    formateCount() {
        const value = this.props.counter.value;
        return value===0 ? "Zero": value;
    }
}


 
export default Counter;