import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMidlleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

export type RootState = ReturnType<typeof reducers>
let store = createStore(reducers, applyMiddleware(thunkMidlleware));

// @ts-ignore
window.__store__ = store

export default store;


