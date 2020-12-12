import {
    addNewPeopleMessages,
    updateNewPeopleText,
} from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {RootState} from '../redux/redux-store';

let  mapStateToProps =(state: RootState) => {
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const DialogsContainer = connect(mapStateToProps,
    {updateNewPeopleText, addNewPeopleMessages})(Dialogs);

export default DialogsContainer;



// let  mapDispatchToProps =(dispatch: (action: DialogsActionsType) => void) => {
//     return {
//         updateNewPeopleText: (newPeopleText: string) => {
//             dispatch(updateNewPeopleText(newPeopleText));
//         },
//         addNewPeopleMessages: () => {
//             dispatch(addNewPeopleMessages());
//         }
//     }
// }

//const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

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

