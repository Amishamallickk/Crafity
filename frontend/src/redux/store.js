import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";

const Store = configureStore ({
    reducer: {
        user: userReducer,
    },
});

export default Store;

// import {createStore} from 'redux'
// import reducer from "./reducers"

// const Store = createStore(reducer)


// export default Store