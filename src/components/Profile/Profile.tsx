import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {StoreType} from '../redux/store';

type ProfilePropsType = {
    store: StoreType
}

const Profile = (props: ProfilePropsType) => {
    debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
}

export default Profile;