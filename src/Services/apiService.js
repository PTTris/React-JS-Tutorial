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
    return axios.get(`v1/participant?page=${page}&limit=${limit}`);
};

const postLogin = (email, password) => {
    return axios.post(`v1/login`, { email, password, delay: 2000 });
};

const postRegister = (email, username, password) => {
    return axios.post(`v1/register`, { email, username, password });
};

const getQuizByUser = () => {
    return axios.get(`v1/quiz-by-participant`);
};

export {
    postCreateUser,
    getAllUser,
    putUpdateUser,
    deleteUser,
    getUserWithPaginate,
    postLogin,
    postRegister,
    getQuizByUser,
};
