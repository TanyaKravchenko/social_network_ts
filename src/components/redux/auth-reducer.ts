import {AuthAPI} from '../../api/api';
import {Dispatch} from 'react';

const SET_USER_DATA = 'SET_USER_DATA';

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type AuthActionsType = ReturnType<typeof setAuthUserData>

let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action: AuthActionsType):AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login, isAuth}
    } as const
}

export const getAuthUserData = () => (dispatch: Dispatch<AuthActionsType>) => {
    AuthAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login, isAuth} = response.data.data
                dispatch(setAuthUserData(id, email, login, isAuth));
            }
        });
}
export default authReducer;