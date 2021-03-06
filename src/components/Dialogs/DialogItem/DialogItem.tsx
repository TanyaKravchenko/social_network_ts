import React from 'react';
import classes from './DialogItem.module.css'
import {NavLink} from 'react-router-dom';

export type DialogItemType = {
    id: number
    name: string
    avatar: string
}

const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={classes.dialogItem}>
            <div className={classes.dialogAvatar}>
                <NavLink to={path}><img src={props.avatar} alt={'avatar'}/></NavLink>
            </div>
            <div className={classes.dialog}>
                <NavLink style={{textDecoration: 'none', color: '#42413d', fontWeight: 'bold'}}
                         to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
}
export default DialogItem;