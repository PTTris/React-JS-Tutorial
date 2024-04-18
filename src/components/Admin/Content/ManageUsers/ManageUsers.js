import ModalCreateUser from "./ModalCreateUser";
import "./ManageUsers.scss";
import { useEffect, useState } from "react";
import {
    getAllUser,
    getUserWithPaginate,
} from "../../../../Services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPagnigate from "./TableUserPagnigate";

const ManageUsers = () => {
    const LIMIT_USER = 7;
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [showModalView, setShowModalView] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);

    const [listUsers, setListUsers] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataDelete, setDataDelete] = useState({});
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    // Call API sử dụng ansync/await
    /* Paginate */
    const fetchUsersWithPaginate = async (page) => {
        let response = await getUserWithPaginate(page, LIMIT_USER);
        if (response.EC === 0) {
            setListUsers(response.DT.users);
        }
        setPageCount(response.DT.totalPages);
    };

    // const fetchUsers = async () => {
    //     let response = await getAllUser();

    //     if (response.EC === 0) {
    //         setListUsers(response.DT);
    //     }
    // };

    // Call API dùng useEffect
    useEffect(() => {
        fetchUsersWithPaginate(1);
    }, []);

    // Xử lý sự kiện click
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
                    {/* <TableUser
                        listUsers={listUsers}
                        handleClickUpdateUser={handleClickUpdateUser}
                        handleClickViewUser={handleClickViewUser}
                        handleClickDeleteUser={handleClickDeleteUser}
                    /> */}
                    <TableUserPagnigate
                        listUsers={listUsers}
                        handleClickUpdateUser={handleClickUpdateUser}
                        handleClickViewUser={handleClickViewUser}
                        handleClickDeleteUser={handleClickDeleteUser}
                        fetchUsersWithPaginate={fetchUsersWithPaginate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
            <ModalCreateUser
                show={showModalCreate}
                setShow={setShowModalCreate}
                fetchUsersWithPaginate={fetchUsersWithPaginate}
                setCurrentPage={setCurrentPage}
            />
            <ModalUpdateUser
                show={showModalUpdate}
                setShow={setShowModalUpdate}
                fetchUsersWithPaginate={fetchUsersWithPaginate}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
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
                fetchUsersWithPaginate={fetchUsersWithPaginate}
                dataDelete={dataDelete}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default ManageUsers;
