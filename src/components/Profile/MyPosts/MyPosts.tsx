import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsPropsType = {
    posts: Array<PostType>
    onAddPost: (newPostText: string) => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts
        .map(post => <Post key={post.id} message={post.message} id={post.id} likesCount={post.likesCount}/>)

    let onAddPost = (newPostText: any) => {
        props.onAddPost(newPostText);
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.updateNewPostText(text)
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
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;