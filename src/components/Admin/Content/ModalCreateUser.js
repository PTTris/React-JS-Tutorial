import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalCreateUser = () => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
      <>
         <Button variant="primary" onClick={handleShow}>
            Launch demo modal
         </Button>

         <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
               <Modal.Title>Add new user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <form className="row g-3">
                  <div className="col-md-8">
                     <label for="inputEmail4" className="form-label">
                        Email
                     </label>
                     <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                     />
                  </div>
                  <div className="col-md-4">
                     <label for="inputPassword4" className="form-label">
                        Password
                     </label>
                     <input
                        type="password"
                        className="form-control"
                        id="inputPassword4"
                     />
                  </div>
                  <div className="col-md-8">
                     <label className="form-label">Username</label>
                     <input
                        type="text"
                        className="form-control"
                        placeholder="1234 Main St"
                     />
                  </div>
                  <div className="col-md-4">
                     <label className="form-label">Role</label>
                     <select className="form-select">
                        <option selected value={"USER"}>
                           User
                        </option>
                        <option selected value={"ADMIN"}>
                           Admin
                        </option>
                     </select>
                  </div>
                  <div className="col-12">
                     <label className="form-image">Image</label>
                     <input className="form-image-input" type="file" />
                  </div>
               </form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary" onClick={handleClose}>
                  Save Changes
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
};

export default ModalCreateUser;
