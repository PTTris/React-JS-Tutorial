import {useState} from "react";

const AddUserInfor = (props) => {
   const {handleAddUserInfor} = props;
   const [name, setName] = useState("PT269");
   const [age, setAge] = useState(21);
   const [address, setAddress] = useState("Trà Vinh");

   const handleOnchangeName = (event) => {
      setName(event.target.value);
   };

   const handleOnchangeAge = (event) => {
      setAge(event.target.value);  
   };

   const handleOnsubmit = (event) => {
      event.preventDefault();
      handleAddUserInfor({
         id: Math.floor((Math.random() * 100) + 1) + "-random",
         name: name,
         age: age,
      });
   };

   return (
      <>
         <p>
            My name: {name}, My age: {age}
         </p>
         <form onSubmit={(event) => handleOnsubmit(event)}>
            <input
               value={name}
               type="text"
               onChange={(event) => handleOnchangeName(event)}
            />
            <input
               value={age}
               type="text"
               onChange={(event) => handleOnchangeAge(event)}
            />
            <button>Submit</button>
         </form>
      </>
   );
}

export default AddUserInfor;