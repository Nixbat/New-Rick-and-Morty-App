import { ADD_FAVORITE, REMOVE_FAVORITE, GET_CHARACTER_DETAIL, CLEAN_DETAIL, GET_FAVORITES } from "./actions";

const initialState = {
    myFavorites: [],
    characterDetail: {},
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
            };

        case REMOVE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (char) => char.id !== action.payload 
                ),
            };

        case GET_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail: action.payload,
            };

        case CLEAN_DETAIL:
            return {
                ...state,
                characterDetail: {},
            };

        case GET_FAVORITES:
            return {
                ...state,
                myFavorites: action.payload,
            };

        default:
            return state;
    }
};

export default rootReducer;


