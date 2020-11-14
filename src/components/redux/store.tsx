import profileReducer, {addPostAC, updateNewPostTextAC} from './profile-reducer';
import dialogsReducer, {addNewPeopleMessagesAC, updateNewPeopleTextAC} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import src1 from '../../images/avatar3.jpg';
import src2 from '../../images/avatar5.jpg';
import src3 from '../../images/avatar4.jpeg';
import src4 from '../../images/avatar1.png';
import src5 from '../../images/avatar6.jpg';
import src6 from '../../images/avatar2.jpg';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogItemType = {
    id: number
    name: string
    avatar: string
}

export type MessageType = {
    id: number
    message: string
}

export type FriendBlockType = {
    id: number
    friendName: string
    avatar: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newPeopleMessage: string
}

export type SideBarType = {
    friendsBlock: Array<FriendBlockType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SideBarType
}

export type ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addNewPeopleMessagesAC>
    | ReturnType<typeof updateNewPeopleTextAC>

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello!', likesCount: 15},
                {id: 2, message: 'How are you?', likesCount: 25},
            ],
            newPostText: 'Bla-Bla'

        },
        dialogsPage: {
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
        },
        sidebar: {
            friendsBlock: [
                {id: 1, friendName: 'Kostya', avatar: src1},
                {id: 2, friendName: 'Masha', avatar: src2},
                {id: 3, friendName: 'Misha', avatar: src3}
            ]
        }
    },
    _callSubscriber() {
        console.log('XXX')
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        //this._state.profilePage = profileReducer(this._state.profilePage, action);
        //this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        //this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber();
    }

}

export default store;