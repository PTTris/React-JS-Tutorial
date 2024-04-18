import { Table } from "react-bootstrap";
import React from "react";
import ReactPaginate from "react-paginate";
import { MdDelete, MdSystemUpdateAlt, MdGridView } from "react-icons/md";

const TableUserPagnigate = (props) => {
    const {
        listUsers,
        handleClickUpdateUser,
        handleClickViewUser,
        handleClickDeleteUser,
        fetchUsersWithPaginate,
        pageCount,
    } = props;

    /* Paginate */
    const handlePageClick = (event) => {
        fetchUsersWithPaginate(event.selected + 1);
    };

    return (
        <>
            <div
                className="table-container"
                style={{ height: "650px", marginBottom: "20px" }}
            >
                <Table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th className="text-center fs-6" scope="col">
                                ID
                            </th>
                            <th className="text-center fs-6" scope="col">
                                Username
                            </th>
                            <th className="text-center fs-6" scope="col">
                                Email
                            </th>
                            <th className="text-center fs-6" scope="col">
                                Role
                            </th>
                            <th className="text-center fs-6" scope="col">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers &&
                            listUsers.length > 0 &&
                            listUsers.map((item) => {
                                return (
                                    <tr>
                                        <td className="text-center col-1">
                                            {item.id}
                                        </td>
                                        <td className="">{item.username}</td>
                                        <td>{item.email}</td>
                                        <td className="text-center">
                                            {item.role}
                                        </td>
                                        <td className=" fs-2 col-2 ">
                                            <MdGridView
                                                className="text-info mx-2"
                                                onClick={() =>
                                                    handleClickViewUser(item)
                                                }
                                                cursor={"pointer"}
                                            />
                                            <MdSystemUpdateAlt
                                                className="mx-5"
                                                onClick={() =>
                                                    handleClickUpdateUser(item)
                                                }
                                                cursor={"pointer"}
                                            />
                                            <MdDelete
                                                className="text-danger"
                                                onClick={() =>
                                                    handleClickDeleteUser(item)
                                                }
                                                cursor={"pointer"}
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                        {listUsers && listUsers.length === 0 && (
                            <tr>
                                <td className="text-center" colSpan={4}>
                                    No found user
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
            {/* Paginate */}
            <div
                className="paginater-container"
                style={{ display: "flex", justifyContent: "center" }}
            >
                <ReactPaginate
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={3}
                    pageCount={pageCount}
                    nextLabel=">"
                    previousLabel="<"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    );
};

export default TableUserPagnigate;
