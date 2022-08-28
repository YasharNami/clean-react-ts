import { MENU } from "./actions";

export const initial_state = {

};

function reducer(state = initial_state, action: any) {
    switch (action.type) {
        case MENU:
            return { ...state, menu: action.payload };
        default:
            return state;
    }
}

export default reducer;
