import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostAC, updateNewPostTextAC} from '../../redux/profile-reducer';
import { ActionsType, PostType } from '../../redux/store';

type MyPostsPropsType = {
    posts: Array<PostType>
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    newPostText: string
    dispatch: (action: ActionsType) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts
        .map(post => <Post message={post.message} id={post.id} likesCount={post.likesCount}/>)

    let addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.dispatch(updateNewPostTextAC(text))
    }

    return (
        <div className={classes.postsWrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;