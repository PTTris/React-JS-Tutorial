import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { postCreateUser, putUpdateUser } from "../../../../Services/apiService";
import _ from "lodash";

const ModalUpdateUser = (props) => {
    const { show, setShow, fetchUsers, dataUpdate, setDataUpdate } = props;

    const handleClose = () => {
        setShow(false);
        setEmail("");
        setPassword("");
        setUsername("");
        setRole("USER");
        setImage("");
        setPreviewImg("");
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

    const handleUpLoadFile = (event) => {
        if (event.target && event.target.files && event.target.files[0])
            setPreviewImg(URL.createObjectURL(event.target.files[0]));
        //   else setPreviewImg("");
        setImage(event.target.files[0]);
    };
    const handleSubmitCreateUser = async () => {
        if (!username) {
            toast.error("Invalid username!");
            return;
        }

        //   Call API
        let data = await putUpdateUser(dataUpdate.id, username, role, image);

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
                                disabled
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

export default ModalUpdateUser;
