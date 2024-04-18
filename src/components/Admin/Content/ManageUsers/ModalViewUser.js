import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { putUpdateUser } from "../../../../Services/apiService";
import _ from "lodash";

const ModalViewUser = (props) => {
    const { show, setShow, dataUpdate, setDataUpdate } = props;

    const handleClose = () => {
        setShow(false);
        setDataUpdate({});
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImg, setPreviewImg] = useState("");

    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            setEmail(dataUpdate.email);
            setPassword(dataUpdate.password);
            setUsername(dataUpdate.username);
            setRole(dataUpdate.role);
            setImage("");
            if (dataUpdate.image) {
                setPreviewImg(`data:image/jpeg;base64,${dataUpdate.image}`);
            }
        }
    }, [dataUpdate]);

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                className="modal-add-users"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-8">
                            <label for="inputEmail4" className="form-label">
                                Email
                            </label>
                            <input
                                disabled
                                type="email"
                                className="form-control"
                                value={email}
                            />
                        </div>
                        <div className="col-md-4">
                            <label for="inputPassword4" className="form-label">
                                Password
                            </label>
                            <input
                                disabled
                                type="password"
                                className="form-control"
                                value={password}
                            />
                        </div>
                        <div className="col-md-8">
                            <label className="form-label">Username</label>
                            <input
                                disabled
                                type="text"
                                className="form-control"
                                value={username}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select disabled className="form-select">
                                {role === "USER" ? (
                                    <>
                                        <option selected value={"USER"}>
                                            User
                                        </option>
                                        <option value={"ADMIN"}>Admin</option>
                                    </>
                                ) : (
                                    <>
                                        <option value={"USER"}>User</option>
                                        <option selected value={"ADMIN"}>
                                            Admin
                                        </option>
                                    </>
                                )}
                            </select>
                        </div>
                        <div className="col-12 img-preview">
                            {previewImg ? (
                                <img src={previewImg} alt="" />
                            ) : (
                                <span style={{ color: "rgba(0, 0, 0, .6)" }}>
                                    Preview Image
                                </span>
                            )}
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalViewUser;
