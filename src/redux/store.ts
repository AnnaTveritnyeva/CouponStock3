import { GuestReducer } from "./GuestReducer";
import {combineReducers, legacy_createStore as createStore} from "redux"

const reducers = combineReducers({guest:GuestReducer})

const store = createStore(reducers);

export default store;