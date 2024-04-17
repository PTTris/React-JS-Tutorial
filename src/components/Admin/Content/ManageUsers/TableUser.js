import { Table } from "react-bootstrap";

import { MdDelete, MdSystemUpdateAlt, MdGridView } from "react-icons/md";
const TableUser = (props) => {
    const { listUsers, handleClickUpdateUser } = props;

    return (
        <>
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
                                    <td className="text-center">{item.role}</td>
                                    <td className=" fs-2 col-2 ">
                                        <MdGridView
                                            className="text-info mx-2"
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
        </>
    );
};

export default TableUser;
