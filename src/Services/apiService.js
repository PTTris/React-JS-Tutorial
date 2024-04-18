import axios from "../utils/axiosCustomize";

const postCreateUser = (email, password, username, role, image) => {
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);
    return axios.post(`v1/participant`, data);
};

const getAllUser = () => {
    return axios.get(`v1/participant/all`);
};

const putUpdateUser = (id, username, role, image) => {
    const data = new FormData();
    data.append("id", id);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);
    return axios.put(`v1/participant`, data);
};

const deleteUser = (userID) => {
    // x-www-form-urlencoded
    return axios.delete(`v1/participant`, { data: { id: userID } });
};

const getUserWithPaginate = (page, limit) => {
    // x-www-form-urlencoded
    return axios.get(`v1/participant?page=${page}&limit=${limit}`);
};

export {
    postCreateUser,
    getAllUser,
    putUpdateUser,
    deleteUser,
    getUserWithPaginate,
};
