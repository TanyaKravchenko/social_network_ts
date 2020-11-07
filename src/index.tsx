import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {
    addNewPeopleMassages,
    addPost,
    StateType, subscribe,
    updateNewPeopleText,
    updateNewPostText
} from './components/redux/state';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    state={state}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                    addNewPeopleMassages={addNewPeopleMassages}
                    updateNewPeopleText={updateNewPeopleText}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree();

subscribe(rerenderEntireTree)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
