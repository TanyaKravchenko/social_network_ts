import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile, ProfileType} from '../redux/profile-reducer';
import {RootState} from '../redux/redux-store';

type ProfileContainerType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType | null
}

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render () {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: RootState) => ({
    profile: state.profilePage.profile
})

export default connect (mapStateToProps, {setUserProfile}) (ProfileContainer);