import React, { Component } from "react"; 
import "./quantityPicker.css";

class QuantityPicker extends Component {
    state = {
        value: 1,
        name: "Leo:"
    };

    render() {
        return (
        <div className="quantity-picker">
            <button onClick={this.increase} className="btn btn-sm btn-info">
                +
            </button>
            <label className="value">{this.state.value}</label>
            <button onClick={this.decrease} className="btn btn-minus btn-sm btn-info">
                -
            </button>
        </div>
        );
    }

    increase = () => {
        this.setState({ value: this.state.value + 1});
    }; 

    decrease = () => {
        let val = this.state.value -1;
        if(val > 0 ) {
            this.setState({ value: val });
        }
    };
}

export default QuantityPicker;