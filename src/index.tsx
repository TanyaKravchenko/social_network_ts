import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './components/redux/redux-store';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {DialogsPageType, ProfilePageType, StateType} from './components/redux/store';
import {Provider} from 'react-redux';

export type StoreStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export let rerenderEntireTree = (state: StateType) => {
    debugger
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <App/>
                </Provider>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
