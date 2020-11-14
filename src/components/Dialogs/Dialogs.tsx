import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPageType, ActionsType} from '../redux/store';
import { addNewPeopleMessagesAC, updateNewPeopleTextAC } from '../redux/dialogs-reducer';

type DialogsPropsType = {
    state: DialogsPageType
    // addNewPeopleMassages: () => void
    // newPeopleMessage: string
    // updateNewPeopleText: (newPeopleText:string) => void
    dispatch: (action: ActionsType) => void
}

const Dialogs = (props: DialogsPropsType) => {
debugger
    let messageElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)
    let dialogsElements = props.state.dialogs.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id}/>);


    let addNewPeopleMassages = () => {
        props.dispatch (addNewPeopleMessagesAC(props.state.newPeopleMessage));
    }

    let onChangePeopleText =  (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.dispatch (updateNewPeopleTextAC(text))
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
                value={props.state.newPeopleMessage}
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