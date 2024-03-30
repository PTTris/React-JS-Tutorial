// class component
// function component
import React from "react";
import ReactDOM from "react-dom";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {

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
