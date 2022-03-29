const dataLogin = {
    userLogin: [{
        user: "",
        pass: ''
    }]
}

const AuthReducer = (state = dataLogin, action) => {
    switch (action.typpe) {
        case 'value':
            return state;

        default:
            return state;
    }
}
export default AuthReducer;