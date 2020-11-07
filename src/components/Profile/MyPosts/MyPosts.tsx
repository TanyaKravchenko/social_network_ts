import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css'
import {PostType} from '../../redux/state';
import Post from './Post/Post';

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: () => void
    updateNewPostText: (newText: string) => void
    NewPostText: string
}

const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts
        .map(post => <Post message={post.message} id={post.id} likesCount={post.likesCount}/>)

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={classes.postsWrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.NewPostText}/>
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