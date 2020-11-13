import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import store, {ActionsType, StateType} from './components/redux/state';

type AppType = {
    state: StateType
    dispatch: (action: ActionsType) => void
}

const App = (props: AppType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() =>
                    <Profile
                        state={props.state.profilePage}
                        dispatch={store.dispatch.bind(store)}
                    />}
                />
                <Route path='/dialogs' render={() =>
                    <Dialogs
                        state={props.state.dialogsPage}
                        dispatch={store.dispatch.bind(store)}
                    />}
                />
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}
export default App;
