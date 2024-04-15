import ModalCreateUser from "./ModalCreateUser";
import "./ManageUsers.scss";
import { useState } from "react";
const ManageUsers = () => {
   const [showModalCreactUser, setShowModalCreactUser] = useState(false);
   return (
      <div className="manage-user-container">
         <div className="title">Manage Users</div>
         <div className="user-content">
            <button
               className="btn-add-user btn btn-primary"
               onClick={() => setShowModalCreactUser(true)}
            >
               Add new user
            </button>

            <div className="table-users-container">Table users</div>
         </div>
         <ModalCreateUser
            show={showModalCreactUser}
            setShow={setShowModalCreactUser}
         />
      </div>
   );
};

export default ManageUsers;
