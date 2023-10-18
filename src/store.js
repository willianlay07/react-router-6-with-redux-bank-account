import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import accountReducer from "./features/account/accountSlice";

const rootReducers  = combineReducers({
    account: accountReducer
});

const store         = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;