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
      this.setState({
         name: "TuKhanh",
         age: 18,
      });
   };

   handleOnMouseOver = (event) => {
      console.log(event);
   };

   handleOnchange = (event) => {
      this.setState({ name: event.target.value });
   };

   handleOnsubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
   }

   render() {
      return (
         <div>
         <h1>PT26 with ReactJS</h1>
         <p>My name: {this.state.name}</p>
         <form onSubmit={(event) => this.handleOnsubmit(event)}>
            <input type="text" onChange={(event) => this.handleOnchange(event)} />
            <button>Submit</button>
         </form>
         </div>
      );
   }
}

export default MyComponent;
