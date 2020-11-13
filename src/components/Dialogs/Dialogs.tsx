import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import {ActionsType, DialogsPageType} from '../redux/state';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

type DialogsPropsType = {
    state: DialogsPageType
    // addNewPeopleMassages: () => void
    // newPeopleMessage: string
    // updateNewPeopleText: (newPeopleText:string) => void
    dispatch: (action: ActionsType) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let messageElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);


    let addNewPeopleMassages = () => {
        props.dispatch ({type: 'ADD-NEW-PEOPLE-MESSAGES', newPeopleMessage: props.state.newPeopleMessage});
    }

    let onChangePeopleText =  (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.dispatch ({type: 'UPDATE-NEW-PEOPLE-TEXT', newPeopleText: text })
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