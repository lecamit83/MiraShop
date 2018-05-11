const loginReducer = ( state = true, action ) => {
    switch (action.type) {
        case "SIGN_IN":{
            return true;
        }
        case "SIGN_OUT":{
            return false;
        }
    }
    return state;
}

export default loginReducer;