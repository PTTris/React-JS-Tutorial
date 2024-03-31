// class component
// function component
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
   state = {
      listUsers: [
         { id: 1, name: "Phan Thanh Trí", age: 21 },
         { id: 2, name: "Trần Tú Khanh", age: 18 },      
         { id: 3, name: "PT26", age: 25 },
      ]
   };

   render() {
      return (
      <div>
        <h1>PT26 with ReactJS</h1>
        <UserInfor />
        <DisplayInfor listUsers = {this.state.listUsers} />
      </div>
      );
   }
}

export default MyComponent;
