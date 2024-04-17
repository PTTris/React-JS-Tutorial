import ModalCreateUser from "./ModalCreateUser";
import "./ManageUsers.scss";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../../Services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";

const ManageUsers = () => {
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState(false);

    const [listUsers, setListUsers] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});
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
                dataUpdate={dataUpdate}
            />
        </div>
    );
};

export default ManageUsers;
