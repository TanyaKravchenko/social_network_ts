import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {StoreType} from './components/redux/store';

// type AppType = {
//     store: StoreType
//
// }

const App = (/*props: AppType*/) => {
    return (
        <div className="app-wrapper">
            <Header/>
            {/*<Navbar state={props.store.getState().sidebar}/>*/}
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() =>
                    <Profile />}
                />
                <Route path='/dialogs' render={() =>
                    <DialogsContainer
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
