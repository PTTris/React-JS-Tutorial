import {useState, useEffect} from "react";
import "./scss/DisplayInfor.scss";
import logo from "./../logo.svg"

const DisplayInfor = (props) => {
   const {listUsers,handleDeleteUser} = props;
   // HOOK
   const [isShowHideListUsers, setShowHideListUsers] = useState(true);
   const handleShowHide = () => {
      setShowHideListUsers(!isShowHideListUsers);
   }

   useEffect(() => {
      if(listUsers.length === 0) {
         alert("Please select")
      }
   },[listUsers]
   )

   return (
      <div className="display-infor-container">
         <img src={logo}/>
         <div>
            <span onClick={() => handleShowHide()}>
               {isShowHideListUsers ? "Hide list users" : "Show list users"}
            </span>
         </div>

         {isShowHideListUsers && 
         <div>
            <p>DisplayInfor</p>
            {listUsers.map(user => {
               return (
                  <div key={user.id} className={user.age > 18 && "red"}>
                     <p>My name: {user.name}, my age: {user.age}</p>
                     <button onClick={() => {handleDeleteUser(user.id)}}>Delete</button>
                  </div>
               )
            })}
         </div>
         }
      </div>
   );
}

export default DisplayInfor;