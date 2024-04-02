// class component
// function component
import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
   state = {
      listUsers: [
         { id: 1, name: "Phan Thanh Trí", age: 21 },
         { id: 2, name: "Trần Tú Khanh", age: 18 },      
         { id: 3, name: "PT26", age: 25 },
      ]
   };
   handleAddUserInfor = (userObj) => {
      this.setState({
         listUsers: [userObj,...this.state.listUsers]
      })
   }
   render() {
      return (
      <div>
         <h1>PT26 with ReactJS</h1>
         <AddUserInfor 
            handleAddUserInfor = {this.handleAddUserInfor}
         />
         <DisplayInfor 
            listUsers = {this.state.listUsers}
         />
      </div>
      );
   }
}

export default MyComponent;
