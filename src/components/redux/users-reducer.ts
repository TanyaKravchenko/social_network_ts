const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

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
}

export type UsersActionsType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>


let initialState: UsersType = {
    users: []
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
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}
export const followAC = (userID: string) => {
    return {
        type: FOLLOW,
        userID: userID
    } as const
}

export const unfollowAC = (userID: string) => {
    return {
        type: UNFOLLOW,
        userID: userID
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users: users
    } as const
}

export default usersReducer;