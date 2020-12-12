import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, ProfileType} from '../redux/profile-reducer';
import {RootState} from '../redux/redux-store';
import {withRouter, RouteComponentProps, Redirect} from 'react-router-dom';

type mapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}
type OwnProps = mapStateToPropsType & mapDispatchToPropsType;

type PathParamsType = {
    userId: string
}

type ProfileContainerType = RouteComponentProps<PathParamsType> & OwnProps

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUserProfile(userId)
        // usersAPI.getProfile(userId).then(response => {
        //         this.props.setUserProfile(response.data);
        //     });
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'} />;
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: RootState): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);