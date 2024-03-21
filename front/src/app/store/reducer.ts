interface Action {
    type: string,
    payload: any;
}

interface State {
    isAuthenticated: boolean;
    token: string | null;
}

const initialState: State = {
    isAuthenticated: false,
    token: null,
}

const reducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case 'SET_ISAUTHENTICATED':
            return {
                ...state,
                isAuthenticated: action.payload
            };
        default:
            return state;
    }
}

export default reducer;
