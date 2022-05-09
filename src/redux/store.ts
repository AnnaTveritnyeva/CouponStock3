import {combineReducers, EmptyObject, legacy_createStore as createStore, Store} from "redux"
import { GuestReducer, GuestState } from "./reducers/GuestReducer";
import { UserReducer, UserState } from "./reducers/UserReducer";

const reducers = combineReducers({guest:GuestReducer, user: UserReducer})
//see if there's anothe better, way to do that 
//make state persist on refreshed
function saveToLocalStorage(store: EmptyObject & {
    //guest: GuestState;
    user: UserState;
}) {
    try {
        const serializedStore = JSON.stringify(store);
        window.localStorage.setItem('store', serializedStore);
    } catch(e) {
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedStore = window.localStorage.getItem('store');
        if(serializedStore === null) return undefined;
        return JSON.parse(serializedStore);
    } catch(e) {
        console.log(e);
        return undefined;
    }
}

const persistedState = loadFromLocalStorage();

const store = createStore(reducers, persistedState);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;