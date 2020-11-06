import React from 'react';
import classes from './Post.module.css'
import post_image1 from '../../../../images/avatar1.png'

type PostPropsType = {
    message:string
    likesCount: number
    id: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={classes.item}>
            <img src={post_image1}/>
            {props.message}
            <div>
                <span>Likes: {props.likesCount}</span>
            </div>
        </div>
    );
}
export default Post;