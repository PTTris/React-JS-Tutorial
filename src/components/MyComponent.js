// class component
// function component
import {useState} from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const MyComponent = () => {
   const [listUsers, setListUser] = useState( 
      [
         { id: 1, name: "Phan Thanh Trí", age: 21 },
         { id: 2, name: "Trần Tú Khanh", age: 18 },      
         { id: 3, name: "PT26", age: 25 },
      ]
   );

   const handleAddUserInfor = (userObj) => {
     setListUser([userObj,...listUsers])
   }
   const handleDeleteUser = (userId) => {
      let listUsersClone = listUsers;
      let newlistUsersClone = listUsersClone.filter(user => user.id !== userId)
      setListUser(newlistUsersClone)
   }
   return (
   <div>
      <h1>PT26 with ReactJS</h1>
      <AddUserInfor 
         handleAddUserInfor = {handleAddUserInfor}
      />
      <DisplayInfor 
         listUsers = {listUsers}
         handleDeleteUser = {handleDeleteUser}
      />
   </div>
   );
   
}

export default MyComponent;
