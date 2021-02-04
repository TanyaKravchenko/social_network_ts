import {actions} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import React from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps,
    {...actions}), withAuthRedirect)(Dialogs);



//mapDispatchToProps можно так сразу писать:
// export default compose<React.ComponentType>(connect(mapStateToProps,
//     {updateNewPeopleText, addNewPeopleMessages}), withAuthRedirect)(Dialogs);
//-------------------------

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

