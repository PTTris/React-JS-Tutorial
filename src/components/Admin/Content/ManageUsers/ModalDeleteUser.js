import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { deleteUser } from "../../../../Services/apiService";
const ModalDeleteUser = (props) => {
    const { show, setShow, dataDelete, fetchUsers } = props;

    const handleClose = () => {
        setShow(false);
    };

    const handleSubmitDelete = async () => {
        let data = await deleteUser(dataDelete.id);

        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            await fetchUsers();
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cofirm delete the User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure delete this user? email:{" "}
                    <b>
                        {dataDelete && dataDelete.email ? dataDelete.email : ""}
                    </b>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmitDelete}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalDeleteUser;
