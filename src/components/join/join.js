import React, { Component } from "react";
import axios from "axios";

import "./join.css";
import SelectRoom from "../select/select";

class Join extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: "",
      room: ''
    }
  }
  async getOptions(){
    const res = await axios.get('https://uber-chat.herokuapp.com/rooms')
    const data = res.data.data;
    const options = data.map(item => ({
      "value" : item.id,
      "label" : item.roomName
    }))
    this.setState({
      selectOptions: options
    })
  }
  handleChange(e){
   this.setState({id:e.value, room:e.label})
  }

  componentDidMount(){
      this.getOptions()
  }

  state = {
    name: "",
    room: "",
  };
  handleChangeName = (e) => {
    this.setState({ name: e.target.value });
  };
  handleRoomChange = (e) => {
    this.setState({ room: e.target.value });
  };
  
  clickHandler = () => {
    let path = "/chat";
    this.props.history.push(path);
    const { name, room } = this.state;
    localStorage.setItem("name", name);
    localStorage.setItem("room", room);
  };

  render() {
    console.log(this.state)
    return (
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Join</h1>

          <div>
            <input
              placeholder="Name"
              onChange={this.handleChangeName}
              value={this.state.name}
              className="joinInput"
              type="text"
            /> 
            {/* <select value={this.state.selectOptions} onChange={this.handleChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>  */}
          <SelectRoom/>
          
            </div>
          <button
            className={"button mt-20"}
            onClick={this.clickHandler}
            type="submit"
          >
            Join
          </button>
        </div>
      </div>
    );
    
  }
}

export default Join;
