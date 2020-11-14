import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPageType} from '../redux/store';

type DialogsPropsType = {
    addNewPeopleMassages: () => void
    updateNewPeopleText: (newPeopleText:string) => void
    dialogsPage: DialogsPageType
}

const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage

    let messageElements = state.messages.map(m => <Message message={m.message} id={m.id}/>)
    let dialogsElements = state.dialogs.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id}/>);

    let addNewPeopleMassages = () => {
        props.addNewPeopleMassages();
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
                <button onClick={addNewPeopleMassages}>Add post</button>
            </div>
        </div>
    );
}
export default Dialogs;