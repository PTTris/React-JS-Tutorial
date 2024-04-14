import ModalCreateUser from "./ModalCreateUser";

const ManageUsers = () => {
   return (
      <div className="manage-user-container">
         <div className="title">Manage Users</div>
         <div className="user-content">
            <div>
               <button>Add user</button>
            </div>

            <div>
               Table users
               <ModalCreateUser />
            </div>
         </div>
      </div>
   );
};

export default ManageUsers;
