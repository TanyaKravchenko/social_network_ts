import {MessageType} from './store';
import src1 from '../../images/avatar3.jpg';
import src2 from '../../images/avatar5.jpg';
import src3 from '../../images/avatar4.jpeg';
import src4 from '../../images/avatar1.png';
import src5 from '../../images/avatar6.jpg';
import src6 from '../../images/avatar2.jpg';

const ADD_NEW_PEOPLE_MESSAGES = 'ADD-NEW-PEOPLE-MESSAGES';
const UPDATE_NEW_PEOPLE_TEXT = 'UPDATE-NEW-PEOPLE-TEXT';

export type ActionsType =
    | ReturnType<typeof addNewPeopleMessagesAC>
    | ReturnType<typeof updateNewPeopleTextAC>

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych', avatar: src1},
        {id: 2, name: 'Sveta', avatar: src2},
        {id: 3, name: 'Valera', avatar: src3},
        {id: 4, name: 'Victor', avatar: src4},
        {id: 5, name: 'Sasha', avatar: src5},
        {id: 6, name: 'Andrey', avatar: src6},
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Hello!'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'How are you?'},
        {id: 5, message: 'Fine!'},
        {id: 6, message: 'Ok'},
    ],
    newPeopleMessage: 'Hello'
};

const dialogsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_NEW_PEOPLE_MESSAGES:
            const newMessage: MessageType = {
                id: 3,
                message: state.newPeopleMessage
            }
            state.messages.push(newMessage);
            state.newPeopleMessage = '';
            return {...state};
        case UPDATE_NEW_PEOPLE_TEXT:
            state.newPeopleMessage = action.newPeopleText;
            return {...state};
        default:
            return state
    }
}
export const addNewPeopleMessagesAC = () => {
    return {
        type: ADD_NEW_PEOPLE_MESSAGES,
    } as const
}

export const updateNewPeopleTextAC = (newPeopleText: string) => {
    return {
        type: UPDATE_NEW_PEOPLE_TEXT,
        newPeopleText: newPeopleText
    } as const
}
export default dialogsReducer;