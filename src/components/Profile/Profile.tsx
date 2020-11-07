import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../redux/state';


type ProfilePropsType = {
    state: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.state.posts}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
                NewPostText={props.state.newPostText}
            />
        </div>
    );
}

export default Profile;