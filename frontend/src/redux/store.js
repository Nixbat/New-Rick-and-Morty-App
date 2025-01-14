import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import ThunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(ThunkMiddleware))
);

export default store;



// import { createStore, applyMiddleware, compose } from "redux";
// import thunkMiddleware from "redux-thunk";
// import reducer from "./reducer"

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

// const store = createStore(
//     reducer,
//     composeEnhancer(applyMiddleware(thunkMiddleware))
// );

// export default store;





