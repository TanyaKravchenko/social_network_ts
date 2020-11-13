export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogItemType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type FriendBlockType = {
    id: number
    friendName: string
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

export type AddPostActionType = {
    type: 'ADD-POST'
    newPostText: string
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type AddNewPeopleMessageActionType = {
    type: 'ADD-NEW-PEOPLE-MESSAGES'
    newPeopleMessage: string
}

export type UpdateNewPeopleTextActionType = {
    type: 'UPDATE-NEW-PEOPLE-TEXT'
    newPeopleText: string
}

export type ActionsType =
    | AddPostActionType
    | UpdateNewPostTextActionType
    | AddNewPeopleMessageActionType
    | UpdateNewPeopleTextActionType


export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    addNewPeopleMassages: () => void
    updateNewPeopleText: (newPeopleText: string) => void
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
            newPostText: 'Dla-Bla'

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Valera'},
                {id: 4, name: 'Victor'},
                {id: 5, name: 'Sasha'},
                {id: 6, name: 'Andrey'},
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
                {id: 1, friendName: 'Kostya'},
                {id: 2, friendName: 'Masha'},
                {id: 3, friendName: 'Misha'}
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

    addNewPeopleMassages() {
        const newMessage: MessageType = {
            id: 3,
            message: this._state.dialogsPage.newPeopleMessage
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newPeopleMessage = '';
        this._callSubscriber();
    },
    updateNewPeopleText(newPeopleText: string) {
        this._state.dialogsPage.newPeopleMessage = newPeopleText;
        this._callSubscriber();
    },
    dispatch(action) {
        debugger
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        } else if (action.type === 'ADD-NEW-PEOPLE-MESSAGES') {
            const newMessage: MessageType = {
                id: 3,
                message: action.newPeopleMessage
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newPeopleMessage = '';
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-PEOPLE-TEXT') {
            this._state.dialogsPage.newPeopleMessage = action.newPeopleText;
            this._callSubscriber();
        }
    }
}

export default store;