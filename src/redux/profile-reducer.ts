import {Dispatch} from 'react';
import {profileAPI, usersAPI} from '../api/api';
import {InferActionsTypes, BaseThunkType} from './redux-store';
import {FormAction} from 'redux-form';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

type ContactType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: string
    photos: PhotosType
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>

let initialState = {
    posts: [
        {id: 1, message: 'Hello!', likesCount: 15},
        {id: 2, message: 'How are you?', likesCount: 25},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
};

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost] // вместо stateCopy.posts = [...state.posts]; stateCopy.posts.push(newPost);
            };
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
}

export const actions = {
    onAddPost: (postText: string) => ({type: ADD_POST, newPostText: postText} as const),
    setUserProfile: (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const),
    setStatus: (status: string) => ({type: SET_STATUS, status} as const),
}

export const getUserProfile = (userId: string) => (dispatch: Dispatch<ActionsType>) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(actions.setUserProfile(response.data));
    });
}

export const getStatus = (userId: string) => (dispatch: Dispatch<ActionsType>) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(actions.setStatus(response.data));
    });
}

export const updateStatus = (status: string) => (dispatch: Dispatch<ActionsType>) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(actions.setStatus(status));
        }
    });
}

export default profileReducer;