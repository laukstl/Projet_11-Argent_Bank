const initialState = {
    val: null
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_VAL':
            return {
                ...state,
                val: action.payload
            };
        default:
            return state;
    }
}

export default reducer;
