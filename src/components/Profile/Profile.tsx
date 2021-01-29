import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../redux/profile-reducer';
import {updateStatusPropsType} from './ProfileContainer';

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
}

const Profile = (props: ProfilePropsType & updateStatusPropsType) => {
    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;