import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../redux/profile-reducer';
import {StoreType} from '../../redux/store';
import MyPosts from './MyPosts';

type MyPostsPropsType = {
    store: StoreType
}

const MyPostsContainer = (props: MyPostsPropsType) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostAC(props.store.getState().profilePage.newPostText))
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextAC(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            onAddPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    );
}

export default MyPostsContainer;