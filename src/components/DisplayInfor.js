import React from "react";
import "./scss/DisplayInfor.scss";
class DisplayInfor extends React.Component {
   state = {
      isShowList: true,
   }
   handleShowHide = () => {
      this.setState({
         // Logic này hay cần nhớ
         isShowList: !this.state.isShowList
      })
   }
   
   render() {
      const { listUsers } =  this.props;
      // Sử dụng dectructuring 
      return (
         <div className="display-infor-container">
            <div>
               <span onClick={this.handleShowHide}>
                  {this.state.isShowList ? "Hide list users" : "Show list users"}
               </span>
            </div>

            {this.state.isShowList && 
            <div>
               <p>DisplayInfor</p>
               {listUsers.map(user => {
                  return (
                     <div key={user.id} className={user.age > 18 && "red"}>
                        <p>My name: {user.name}, my age: {user.age}</p>
                     </div>
                  )
               })}
            </div>
            }
         </div>
      );
   }
}

export default DisplayInfor;