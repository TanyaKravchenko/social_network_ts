import React from 'react';
import {addNewPeopleMessagesAC, updateNewPeopleTextAC} from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {StoreType} from '../redux/store';

type DialogsPropsType = {
    store: StoreType
}

const DialogsContainer = (props: DialogsPropsType) => {
    let state = props.store.getState().dialogsPage;

       let addNewPeopleMassages = () => {
        props.store.dispatch(addNewPeopleMessagesAC(state.newPeopleMessage));
    }

    let onChangePeopleText = (text: string) => {
        props.store.dispatch(updateNewPeopleTextAC(text))
    }

    return (
        <Dialogs
            updateNewPeopleText={onChangePeopleText}
            addNewPeopleMassages={addNewPeopleMassages}
            dialogsPage={state}
        />
    );
}
export default DialogsContainer;