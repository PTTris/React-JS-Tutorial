// class component
// function component
import React from "react";
import ReactDOM from "react-dom";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
  state = {
    name: "PT26",
    age: 21,
    address: "Trà Vinh",
  };

  handleOnchangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleOnchangeAge = (event) => {
      this.setState({ age: event.target.value });
   };

  handleOnsubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>PT26 with ReactJS</h1>
        
        <UserInfor/>
      </div>
    );
  }
}

export default MyComponent;
