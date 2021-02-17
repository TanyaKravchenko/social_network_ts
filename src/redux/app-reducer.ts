import {AuthAPI} from '../api/api';
import {Dispatch} from 'react';
import {InferActionsTypes, BaseThunkType} from './redux-store';
import {FormAction} from 'redux-form/lib/actions';
import {stopSubmit} from 'redux-form';
import {getAuthUserData} from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type AppReducerType = {
    initialized: boolean
}

export type ActionsType =
    ReturnType<typeof initializedSuccess>

type ThunkType = BaseThunkType<ActionsType | FormAction>

let initialState: AppReducerType = {
    initialized: false
};

const appReducer = (state = initialState, action: ActionsType): AppReducerType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}
export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    } as const
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

export default appReducer;