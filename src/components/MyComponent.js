// class component
// function component
import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "PT26",
    age: 21,
    address: "Trà Vinh",
  };
  render() {
    return (
      <div>
        <h1>Phan Thanh Trí with React JS</h1>
        <p>
          Tuổi: {this.state.age}, Địa chỉ: {this.state.address}
        </p>
      </div>
    );
  }
}

export default MyComponent;
