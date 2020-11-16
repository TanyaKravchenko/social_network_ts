import React from 'react';
import {addNewPeopleMessagesAC, updateNewPeopleTextAC} from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {ActionsType, StateType} from '../redux/store';
import {connect} from 'react-redux';
import {StoreStateType} from '../../index';

let  mapStateToProps =(state: StoreStateType) => {
    return{
        dialogsPage: state.dialogsPage
    }
}
let  mapDispatchToProps =(dispatch: (action: ActionsType) => void) => {
    return {
        updateNewPeopleText: (newPeopleText: string) => {
            dispatch(updateNewPeopleTextAC(newPeopleText));
        },
        addNewPeopleMassages: () => {
            dispatch(addNewPeopleMessagesAC());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

// type DialogsPropsType = {
//     store: StoreType
// }
//
// const DialogsContainer = () => {
//     return <StoreContext.Consumer>
//         {(store) => {
//             let state = store.getState().dialogsPage;
//
//             let addNewPeopleMassages = () => {
//                 store.dispatch(addNewPeopleMessagesAC(state.newPeopleMessage));
//             }
//
//             let onChangePeopleText = (text: string) => {
//                 store.dispatch(updateNewPeopleTextAC(text))
//             }
//             return <Dialogs
//                 updateNewPeopleText={onChangePeopleText}
//                 addNewPeopleMassages={addNewPeopleMassages}
//                 dialogsPage={state}
//             />
//         }}
//     </StoreContext.Consumer>
// }

