import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {StateType} from '../redux/store';
import {followAC, setUsersAC, unfollowAC, UsersActionsType, UserType} from '../redux/users-reducer';

let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: (action: UsersActionsType) => void) => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: string) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);