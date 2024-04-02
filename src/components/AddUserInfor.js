import React from "react";

class AddUserInfor extends React.Component {
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
      this.props.handleAddUserInfor({
         id: Math.floor((Math.random() * 100) + 1) + "-random",
         name: this.state.name,
         age: this.state.age,
      });
   };

   render() {
      return (
         <div>
         <p>
            My name: {this.state.name}, My age: {this.state.age}
         </p>
         <form onSubmit={(event) => this.handleOnsubmit(event)}>
            <input
               value={this.state.name}
               type="text"
               onChange={(event) => this.handleOnchangeName(event)}
            />
            <input
               value={this.state.age}
               type="text"
               onChange={(event) => this.handleOnchangeAge(event)}
            />
            <button>Submit</button>
         </form>
         </div>
      );
   }
}

export default AddUserInfor;