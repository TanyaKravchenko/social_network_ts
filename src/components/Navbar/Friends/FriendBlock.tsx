import React from 'react';
import classes from './FriendsBlock.module.css'
import friend_image from '../../../images/avatar5.jpg';
import {FriendBlockType} from '../../redux/state';

const FriendBlock = (props: FriendBlockType) => {
    return (
        <div>
            <div className={classes.friendAvatar}>
                <img src={friend_image}/>
            </div>
            <div className={classes.nameClass}>
                {props.friendName}
            </div>
        </div>
    )
}
export default FriendBlock;