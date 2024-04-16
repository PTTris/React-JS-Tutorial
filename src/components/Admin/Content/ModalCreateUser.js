import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { postCreateUser } from "../../../Services/apiService";

const ModalCreateUser = (props) => {
    const { show, setShow } = props;

    const handleClose = () => {
        setShow(false);
        setEmail("");
        setPassword("");
        setUsername("");
        setRole("USER");
        setImage("");
        setPreviewImg("");
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");

    const [previewImg, setPreviewImg] = useState("");

    const handleUpLoadFile = (event) => {
        if (event.target && event.target.files && event.target.files[0])
            setPreviewImg(URL.createObjectURL(event.target.files[0]));
        //   else setPreviewImg("");
        setImage(event.target.files[0]);
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmitCreateUser = async () => {
        if (!validateEmail(email)) {
            toast.error("Invalid email!");
            return;
        }
        if (!password) {
            toast.error("Invalid password!");
            return;
        }
        if (password.length < 8) {
            toast.error("Please enter 8 characters");
            return;
        }
        if (!username) {
            toast.error("Invalid username!");
            return;
        }

        //   Call API
        //   let data = {
        //      email: email,
        //      password: password,
        //      username: username,
        //      role: role,
        //      userImage: image,
        //   };

        let data = await postCreateUser(email, password, username, role, image);
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
        }
    };
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                className="modal-add-users"
            >
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
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-4">
                            <label for="inputPassword4" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-8">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(event) =>
                                    setUsername(event.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select
                                className="form-select"
                                onChange={(event) =>
                                    setRole(event.target.value)
                                }
                            >
                                <option value={"USER"}>User</option>
                                <option value={"ADMIN"}>Admin</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <label
                                className="form-image lable-upload"
                                htmlFor="form-image-input"
                            >
                                Upload file image
                            </label>
                            <input
                                id="form-image-input"
                                type="file"
                                hidden
                                onChange={(event) => handleUpLoadFile(event)}
                            />
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
                    <Button
                        variant="primary"
                        onClick={() => {
                            handleSubmitCreateUser();
                        }}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalCreateUser;
