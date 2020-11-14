import React from 'react';
import {FriendBlockType} from '../../redux/store';
import FriendBlock from './FriendBlock';
import classes from './FriendsBlock.module.css';
import {NavLink} from 'react-router-dom';

type FriendsBlockType = {
    friendsName: Array<FriendBlockType>
}

const FriendsBlock = (props: FriendsBlockType) => {
    let friendsElements = props.friendsName.map(f => <FriendBlock avatar={f.avatar} friendName={f.friendName} id={f.id}/>)

    return (
        <div>
            <div className={classes.headerFriends}>
                <div className={classes.titleFriends}>
                    <span>Друзья</span>
                </div>
                <div>
                    <span>3</span>
                </div>
            </div>
            <div className={classes.itemFriends}>
                {friendsElements}
            </div>
        </div>
    )
}
export default FriendsBlock;