import React, { Component } from 'react';
//import SelectRoom from './select';
import "./select.css";
class SelectRoom extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Room 1'};
  
      this.handleChange = this.handleChange.bind(this);
      
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      return (
            <select value={this.state.value} onChange={this.handleChange} className="selectItem">
              <option value="room1">Room 1</option>
              <option value="room2">Room 2</option>
              <option value="room3">Room 3</option>
              <option value="room4">Room 4</option>
              <option value="room5">Room 5</option>
            </select>  
      );
    }
  }
  export default SelectRoom;