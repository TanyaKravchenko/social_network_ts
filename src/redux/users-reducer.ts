import {usersAPI} from '../api/api';
import {Dispatch} from 'react';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

export type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: string
    photos: any
    followed: boolean
    name: string
    status: string
    location: LocationType
}

export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}

//export type InitialState = typeof initialState

export type UsersActionsType =
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

let initialState: UsersType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action: UsersActionsType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users: state.users.map(u => u) // тоже что и users:  [...state.users]
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                //users: state.users.map(u => u) // тоже что и users:  [...state.users]
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}
export const followSuccess = (userID: string) => {
    return {
        type: FOLLOW,
        userID: userID
    } as const
}

export const unfollowSuccess = (userID: string) => {
    return {
        type: UNFOLLOW,
        userID: userID
    } as const
}

export const setUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users: users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    } as const
}

export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount: totalCount
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}

export const toggleFollowingProgress = (isFetching: boolean, userId: string) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    } as const
}

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const follow = (userId: string) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.followUsers(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
        });
    }
}

export const unfollow = (userId: string) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollowUsers(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
        });
    }
}

export default usersReducer;