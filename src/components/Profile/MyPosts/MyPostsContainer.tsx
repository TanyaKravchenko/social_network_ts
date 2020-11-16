import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../redux/profile-reducer';
import {ActionsType} from '../../redux/store';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {StoreStateType} from '../../../index';

let mapStateToProps = (state: StoreStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: ((action: ActionsType) => void)) => {
    return {
        updateNewPostText: (newText: string) => {
            let action = updateNewPostTextAC(newText)
            dispatch(action)
        },
        onAddPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;

// type MyPostsPropsType = {
//     store: StoreType
// }
//
// const MyPostsContainer = (props: MyPostsPropsType) => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let addPost = () => {
//                     store.dispatch(addPostAC(props.store.getState().profilePage.newPostText))
//                 }
//                 let onPostChange = (text: string) => {
//                     let action = updateNewPostTextAC(text)
//                     store.dispatch(action)
//                 }
//                 return <MyPosts
//                     updateNewPostText={onPostChange}
//                     onAddPost={addPost}
//                     posts={state.profilePage.posts}
//                     newPostText={state.profilePage.newPostText}
//                 />
//             }
//             }
//         </StoreContext.Consumer>
//     );
// }

