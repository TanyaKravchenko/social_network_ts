import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsStateType} from '../redux/dialogs-reducer';

type DialogsPropsType = {
    addNewPeopleMessages: () => void
    updateNewPeopleText: (newPeopleText:string) => void
    dialogsPage: DialogsStateType
}

const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage

    let messageElements = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)
    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} avatar={d.avatar} name={d.name} id={d.id}/>);

    let addNewPeopleMessages = () => {
        props.addNewPeopleMessages();
    }

    let onChangePeopleText =  (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.updateNewPeopleText(text)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
            <div>
                <textarea
                value={state.newPeopleMessage}
                onChange={onChangePeopleText}
                />
            </div>
            <div>
                <button onClick={addNewPeopleMessages}>Add post</button>
            </div>
        </div>
    );
}
export default Dialogs;