import React, { Component } from "react";
import "./join.css";
import axios from "axios";

class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      selectOptions: [],
      id: "",
      room: "",
    };
    this.handleRoomChange = this.handleRoomChange.bind(this);
  }

  async getOptions() {
    const res = await axios.get("https://chat-uber.herokuapp.com/rooms");
    const data = res.data.data;

    if (data) {
      const options = data.map((d) => ({
        value: d._id,
        label: d.roomName,
      }));
      this.setState({ selectOptions: options, room: options[0].value });
    }
  }

  handleRoomChange(e) {
    const room = this.state.selectOptions.find(
      (item) => item.value === e.target.value
    );
    this.setState({ id: room.value, room: room.label });
  }

  componentDidMount() {
    this.getOptions();
  }

  handleChangeName = (event) => {
    this.setState({ userName: event.target.value });
  };

  clickHandler = async (event) => {
    event.preventDefault();
    const { userName } = this.state;
    if (userName === "") {
      alert("Name is required.");
      return event.preventDefault();
    } else {
      await axios
        .post("https://chat-uber.herokuapp.com/rooms/enterroom", {
          userName: this.state.userName,
          roomId: this.state.id,
        })
        .then((response) => {
          if (response.status === 200 && response.data.success) {
            localStorage.setItem("user", JSON.stringify(response.data.data));
            this.props.history.push("/chat");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  render() {
    const { userName } = this.state;
    return (
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Join</h1>
          <div>
            <input
              placeholder="Name"
              onChange={this.handleChangeName}
              value={userName}
              className="joinInput"
              type="text"
            />
          </div>
          <div>
            <select
              className="joinInput mt-20"
              options={this.state.selectOptions}
              onChange={this.handleRoomChange}
            >
              {this.state.selectOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
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
