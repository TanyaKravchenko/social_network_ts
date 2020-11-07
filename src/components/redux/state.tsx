let rerenderEntireTree = () => {
    console.log('XXX')
}

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

let state: StateType = {
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
}

export const addPost = () => {
    const newPost: PostType = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree();
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export const addNewPeopleMassages = () => {
    const newMessage: MessageType = {
        id: 3,
        message: state.dialogsPage.newPeopleMessage
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newPeopleMessage = '';
    rerenderEntireTree();
}

export const updateNewPeopleText = (newPeopleText: string) => {
    state.dialogsPage.newPeopleMessage = newPeopleText;
    rerenderEntireTree();
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer;
}

export default state;