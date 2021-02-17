import {AuthAPI} from '../api/api';
import {Dispatch} from 'react';
import { InferActionsTypes, BaseThunkType } from './redux-store';
import { FormAction } from 'redux-form/lib/actions';
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type ActionsType =
    ReturnType<typeof setAuthUserData> |
    InferActionsTypes<typeof setAuthUserData>

type ThunkType = BaseThunkType<ActionsType | FormAction>

let initialState: AuthType = {
    id: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
};

const authReducer = (state = initialState, action: ActionsType):AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    } as const
}

export const getAuthUserData = () => (dispatch: Dispatch<ActionsType>) => {
   return AuthAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

export const login = (email: string | null, password: string | null, rememberMe: boolean) => (dispatch: any) => {
    AuthAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                dispatch(stopSubmit('login', {_error: message}));
            }
        });
}

export const logout = () => (dispatch: any) => {
    AuthAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}

export default authReducer;