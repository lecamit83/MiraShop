const initialState = {
    textSearch : "",
};

const searchReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case "SEARCH":{
            return {textSearch : action.textSearch}
        }
    }
    return state;
}

export default searchReducer;