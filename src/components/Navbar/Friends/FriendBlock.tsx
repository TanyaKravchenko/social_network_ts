import React from 'react';
import classes from './FriendsBlock.module.css'
import {NavLink} from 'react-router-dom';

export type FriendBlockType = {
    id: number
    friendName: string
    avatar: string
}

const FriendBlock = (props: FriendBlockType) => {
    let path = '/friendsBlock/' + props.id
    return (
        <div>
            <div className={classes.friendAvatar}>
                <NavLink to={path}><img src={props.avatar} alt={'avatar'}/></NavLink>
            </div>
            <div className={classes.nameClass}>
                <NavLink style={{textDecoration: 'none', color: 'blanchedalmond'}} to={path}>{props.friendName}</NavLink>
            </div>
        </div>
    )
}
export default FriendBlock;