import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import AddPostForm, {AddPostFormValuesType} from './AddPostForm/AddPostForm';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    onAddPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {

    let postsElements = props.posts
        .map(post => <Post key={post.id} message={post.message} id={post.id} likesCount={post.likesCount}/>)

    let onAddPost = (values: AddPostFormValuesType) => {
        props.onAddPost(values.newPostText);
    }

    return (
        <div className={classes.postsWrapper}>
            <h3>My posts</h3>
            <div>
                <AddPostForm onSubmit={onAddPost} />
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;