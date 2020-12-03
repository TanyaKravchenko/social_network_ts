import React from 'react';
import classes from './Message.module.css'

export type MessageType = {
    id: number
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={classes.itemText}>
        <div className={classes.message}>
            {props.message}
        </div>
        </div>
    )
}
export default Message;