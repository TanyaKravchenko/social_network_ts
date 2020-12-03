import { createStore, combineReducers } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from "./dialogs-reducer";
import {sidebarReducer} from './sidebar-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer

});

export type RootState = ReturnType<typeof reducers>

let store = createStore(reducers);

export default store;
