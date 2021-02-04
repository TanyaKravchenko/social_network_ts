import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getStatus, getUserProfile, ProfileType, updateStatus} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {withRouter, RouteComponentProps} from 'react-router-dom';
//import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type mapStateToPropsType = {
    profile: ProfileType | null
    status: string
}

export type updateStatusPropsType = {
    updateStatus: (status: string) => void
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
}
type OwnProps = mapStateToPropsType & mapDispatchToPropsType;

type PathParamsType = {
    userId: string
}

type ProfileContainerType = RouteComponentProps<PathParamsType> & OwnProps & updateStatusPropsType

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        );
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus
}), withRouter)(ProfileContainer);