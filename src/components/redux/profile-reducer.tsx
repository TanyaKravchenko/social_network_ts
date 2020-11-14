import {PostType} from './store';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>


let initialState = {
    posts: [
        {id: 1, message: 'Hello!', likesCount: 15},
        {id: 2, message: 'How are you?', likesCount: 25},
    ],
    newPostText: 'Bla-Bla'
};

const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return {...state}
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return {...state}
        default:
            return state;
    }
}
export const addPostAC= (postText: string) => {
    return {
        type: ADD_POST,
        newPostText: postText
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export default profileReducer;