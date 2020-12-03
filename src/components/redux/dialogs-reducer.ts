import src1 from '../../images/avatar3.jpg';
import src2 from '../../images/avatar5.jpg';
import src3 from '../../images/avatar4.jpeg';
import src4 from '../../images/avatar1.png';
import src5 from '../../images/avatar6.jpg';
import src6 from '../../images/avatar2.jpg';

const ADD_NEW_PEOPLE_MESSAGES = 'ADD-NEW-PEOPLE-MESSAGES';
const UPDATE_NEW_PEOPLE_TEXT = 'UPDATE-NEW-PEOPLE-TEXT';

export type DialogsActionsType =
    | ReturnType<typeof addNewPeopleMessages>
    | ReturnType<typeof updateNewPeopleText>

export type DialogItemType = {
    id: number
    name: string
    avatar: string
}

export type MessageType = {
    id: number
    message: string
}

export type DialogsStateType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newPeopleMessage: string
}

let initialState: DialogsStateType = {
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

const dialogsReducer = (state = initialState, action: DialogsActionsType): DialogsStateType=> {
    switch (action.type) {
        case ADD_NEW_PEOPLE_MESSAGES:
            const newMessage: MessageType = {
                id: 7,
                message: state.newPeopleMessage
            };
            return  {
                ...state,
                newPeopleMessage: '',
                messages: [...state.messages, newMessage]// вместо stateCopy.messages.push(newMessage);
            };
         case UPDATE_NEW_PEOPLE_TEXT:
            return  {
                ...state,
                newPeopleMessage: action.newPeopleText
            };
        default:
            return state
    }
}
export const addNewPeopleMessages = () => {
    return {
        type: ADD_NEW_PEOPLE_MESSAGES,
    } as const
}

export const updateNewPeopleText = (newPeopleText: string) => {
    return {
        type: UPDATE_NEW_PEOPLE_TEXT,
        newPeopleText: newPeopleText
    } as const
}
export default dialogsReducer;