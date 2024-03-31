import React from "react";

class DisplayInfor extends React.Component {
   render() {
      const { listUsers } =  this.props;
      // Sử dụng dectructuring 
      return (
         <div>
            <p>DisplayInfor</p>
            {listUsers.map(user => {
               return (
                  <div key={user.id}>
                     <p>My name: {user.name}, my age: {user.age}</p>
                  </div>
               )
            })}
         </div>
      );
   }
}

export default DisplayInfor;