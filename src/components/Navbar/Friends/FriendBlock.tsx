import React from 'react';
import classes from './FriendsBlock.module.css'
import friend_image from '../../../images/avatar5.jpg';
import {FriendBlockType} from '../../redux/store';
import {NavLink} from 'react-router-dom';

const FriendBlock = (props: FriendBlockType) => {
    let path = '/friendsBlock/' + props.id
    return (
        <div>
            <div className={classes.friendAvatar}>
                <NavLink to={path}><img src={props.avatar}/></NavLink>
            </div>
            <div className={classes.nameClass}>
                <NavLink style={{textDecoration: 'none', color: 'blanchedalmond'}} to={path}>{props.friendName}</NavLink>
            </div>
        </div>
    )
}
export default FriendBlock;