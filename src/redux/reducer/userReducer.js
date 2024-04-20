import { FETCH_USER_LOGIN } from "../action/userAction";
const INITIAL_STATE = {
    account: {
        access_token: "",
        refresh_token: "",
        username: "",
        image: "",
        role: "",
    },
    isAuthenticated: false,
};
const userReducer = (state = INITIAL_STATE, doLogin) => {
    switch (doLogin.type) {
        case FETCH_USER_LOGIN:
            return {
                ...state,
                account: {
                    access_token: doLogin?.payload?.DT?.access_token,
                    refresh_token: doLogin?.payload?.DT?.refresh_token,
                    username: doLogin?.payload?.DT?.username,
                    image: doLogin?.payload?.DT?.image,
                    role: doLogin?.payload?.DT?.role,
                },
                isAuthenticated: true,
            };
        default:
            return state;
    }
};

export default userReducer;
