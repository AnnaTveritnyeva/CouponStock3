import { GuestReducer } from "./GuestReducer";
import {combineReducers, legacy_createStore as createStore} from "redux"
import { UserReducer } from "./UserReducer";

 

 
const reducers = combineReducers({guest:GuestReducer, user: UserReducer})

const store = createStore(reducers);

export default store;