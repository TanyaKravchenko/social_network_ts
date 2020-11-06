import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Andrey'},
    ]

    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Hello!'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'How are you?'},
        {id: 5, message: 'Fine!'},
        {id: 6, message: 'Ok'},
    ]

    let messageElements = messages.map(m => <Message message={m.message} id={m.id}/>)
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                {messageElements}
            </div>
        </div>
    );
}
export default Dialogs;