import src1 from '../images/avatar3.jpg';
import src2 from '../images/avatar5.jpg';
import src3 from '../images/avatar4.jpeg';
import src4 from '../images/avatar1.png';
import src5 from '../images/avatar6.jpg';
import src6 from '../images/avatar2.jpg';
import {InferActionsTypes} from './redux-store';

const ADD_NEW_PEOPLE_MESSAGES = 'ADD-NEW-PEOPLE-MESSAGES';

export type ActionsType = InferActionsTypes<typeof actions>

export type DialogItemType = {
    id: number
    name: string
    avatar: string
}

export type MessageType = {
    id: number
    message: string
}

export type initialStateType = typeof initialState;

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych', avatar: src1},
        {id: 2, name: 'Sveta', avatar: src2},
        {id: 3, name: 'Valera', avatar: src3},
        {id: 4, name: 'Victor', avatar: src4},
        {id: 5, name: 'Sasha', avatar: src5},
        {id: 6, name: 'Andrey', avatar: src6},
    ] as Array<DialogItemType>,
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Hello!'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'How are you?'},
        {id: 5, message: 'Fine!'},
        {id: 6, message: 'Ok'},
    ] as Array<MessageType>,
};

const dialogsReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case ADD_NEW_PEOPLE_MESSAGES:
            const newMessage: MessageType = {
                id: 7,
                message: action.newMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]// вместо stateCopy.messages.push(newMessage);
            };
        default:
            return state;
    }
}
export const actions = {
    sendMessage: (newMessageBody: string) => ({type: ADD_NEW_PEOPLE_MESSAGES, newMessageBody} as const)
}

export default dialogsReducer;