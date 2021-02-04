import {actions} from '../../../redux/profile-reducer';
import MyPosts, {DispatchPropsType, MapPropsType} from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
    }
}
const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {onAddPost: actions.onAddPost})(MyPosts);

export default MyPostsContainer;

// let mapDispatchToProps = (dispatch: ((action: ProfileActionsType) => void)) => {
//     return {
//         updateNewPostText: (newText: string) => {
//             let action = updateNewPostText(newText)
//             dispatch(action)
//         },
//         onAddPost: (newPostText: string) => {
//             dispatch(onAddPost(newPostText))
//         }
//     }
// }

//const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


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

