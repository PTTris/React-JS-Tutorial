import ModalCreateUser from "./ModalCreateUser";
import "./ManageUsers.scss";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../../Services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";

const ManageUsers = () => {
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [showModalView, setShowModalView] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);

    const [listUsers, setListUsers] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataDelete, setDataDelete] = useState({});

    // Call API sử dụng ansync/await
    const fetchUsers = async () => {
        let response = await getAllUser();

        if (response.EC === 0) {
            setListUsers(response.DT);
        }
    };
    // Call API dùng useEffect
    useEffect(() => {
        fetchUsers();
    }, []);

    const handleClickUpdateUser = (user) => {
        setShowModalUpdate(true);
        setDataUpdate(user);
    };
    const handleClickViewUser = (user) => {
        setShowModalView(true);
        setDataUpdate(user);
    };
    const handleClickDeleteUser = (user) => {
        setShowModalDelete(true);
        setDataDelete(user);
    };

    return (
        <div className="manage-user-container">
            <div className="title">Manage Users</div>
            <div className="user-content">
                <button
                    className="btn-add-user btn btn-primary"
                    onClick={() => setShowModalCreate(!showModalCreate)}
                >
                    Add new user
                </button>

                <div className="table-users-container">
                    <TableUser
                        listUsers={listUsers}
                        handleClickUpdateUser={handleClickUpdateUser}
                        handleClickViewUser={handleClickViewUser}
                        handleClickDeleteUser={handleClickDeleteUser}
                    />
                </div>
            </div>
            <ModalCreateUser
                show={showModalCreate}
                setShow={setShowModalCreate}
                fetchUsers={fetchUsers}
            />
            <ModalUpdateUser
                show={showModalUpdate}
                setShow={setShowModalUpdate}
                fetchUsers={fetchUsers}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
            />
            <ModalViewUser
                show={showModalView}
                setShow={setShowModalView}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
            />
            <ModalDeleteUser
                show={showModalDelete}
                setShow={setShowModalDelete}
                fetchUsers={fetchUsers}
                dataDelete={dataDelete}
            />
        </div>
    );
};

export default ManageUsers;
