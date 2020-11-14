import React from 'react';
import classes from './Post.module.css'
import post_image1 from '../../../../images/avatar1.png'
import {PostType} from '../../../redux/store';

const Post = (props: PostType) => {
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