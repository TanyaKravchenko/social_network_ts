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
import {StateType} from './components/redux/state';

type AppType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addNewPeopleMassages: () => void
    updateNewPeopleText: (newPeopleText: string) => void
}

const App = (props: AppType) => {
    debugger
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() =>
                    <Profile
                        state={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}
                    />}
                />
                <Route path='/dialogs' render={() =>
                    <Dialogs
                        state={props.state.dialogsPage}
                        addNewPeopleMassages={props.addNewPeopleMassages}
                        newPeopleMessage={props.state.dialogsPage.newPeopleMessage}
                        updateNewPeopleText={props.updateNewPeopleText}
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
