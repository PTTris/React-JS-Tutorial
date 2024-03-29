// class component
// function component
import React from "react";
import ReactDOM from "react-dom";
class MyComponent extends React.Component {
  state = {
    name: "PT26",
    age: 21,
    address: "Trà Vinh",
  };

  handleClick = (event) => {
    console.log("Click me");
    console.log(event);
  };

  handleOnMouseOver = (event) => {
    console.log(event);
  };

  render() {
    return (
      <div id="root">
        <h1>Phan Thanh Trí with React JS</h1>
        <p>
          Tên: {this.state.name}, Tuổi: {this.state.age}, Địa chỉ:{" "}
          {this.state.address}
        </p>
        <button onMouseOver={this.handleOnMouseOver}>Click me</button>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;
