import {combineReducers, legacy_createStore as createStore} from "redux"
import { GuestReducer } from "./reducers/GuestReducer";
import { UserReducer } from "./reducers/UserReducer";

const reducers = combineReducers({guest:GuestReducer, user: UserReducer})

const store = createStore(reducers);

export default store;