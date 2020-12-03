import React from 'react';
import classes from './Post.module.css'
import post_image1 from '../../../../images/avatar1.png'

export type PostType = {
    id: number
    message: string
    likesCount: number
}

const Post = (props: PostType) => {
    return (
        <div className={classes.item}>
            <img src={post_image1} alt={'avatar'}/>
            {props.message}
            <div>
                <span>Likes: {props.likesCount}</span>
            </div>
        </div>
    );
}
export default Post;