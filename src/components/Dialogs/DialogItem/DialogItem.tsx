import React from 'react';
import classes from './DialogItem.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/'+ props.id
    return (
        <div className={classes.dialog}>
            <NavLink style={{ textDecoration: 'none', color: '#42413d', fontWeight: 'bold'}} to={path}>{props.name}</NavLink>
        </div>
    );
}
export default DialogItem;