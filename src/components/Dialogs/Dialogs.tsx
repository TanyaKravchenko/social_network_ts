import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {initialStateType} from '../../redux/dialogs-reducer';
import {Redirect} from 'react-router-dom';
import AddMessageForm from './AddMessageForm/AddMessageForm';

type DialogsPropsType = {
    sendMessage: (messageText:string) => void
    dialogsPage: initialStateType
    isAuth: boolean
}

export type NewMessageFormValuesType = {
    newMessageBody: string
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let state = props.dialogsPage

    let messageElements = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)
    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} avatar={d.avatar} name={d.name} id={d.id}/>);

    let addNewMessage =  (values: NewMessageFormValuesType) => {
        props.sendMessage(values.newMessageBody)
    }

    if(!props.isAuth) return <Redirect to={'/login'} />;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    );
}

export default Dialogs;


// до 75 урока включительно:
// const Dialogs = (props: DialogsPropsType) => {
//     let state = props.dialogsPage
//
//     let messageElements = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)
//     let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} avatar={d.avatar} name={d.name} id={d.id}/>);
//
//     let addNewPeopleMessages = () => {
//         props.addNewPeopleMessages();
//     }
//
//     let onChangePeopleText =  (e: ChangeEvent<HTMLTextAreaElement>) => {
//         let text = e.currentTarget.value;
//         props.updateNewPeopleText(text)
//     }
//
//     if(!props.isAuth) return <Redirect to={'/login'} />;
//
//     return (
//         <div className={classes.dialogs}>
//             <div className={classes.dialogsItems}>
//                 {dialogsElements}
//             </div>
//             <div className={classes.messages}>
//                 {messageElements}
//             </div>
//             <div>
//                 <textarea
//                     value={state.newPeopleMessage}
//                     onChange={onChangePeopleText}
//                 />
//             </div>
//             <div>
//                 <button onClick={addNewPeopleMessages}>Add post</button>
//             </div>
//         </div>
//     );
// }
// export default Dialogs;