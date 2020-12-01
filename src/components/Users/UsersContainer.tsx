import React from 'react';
import {connect} from 'react-redux';
import {StateType} from '../redux/store';
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC, UsersActionsType, UserType, setTotalUsersCountAC} from '../redux/users-reducer';
import axios from 'axios';
import Users from './Users';

type UsersContainerPropsType = {
    users: Array<UserType>
    unfollow: (userID: string) => void
    follow: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        return <Users
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            setUsers={this.props.setUsers}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            setCurrentPage={this.props.setCurrentPage}
            setTotalUsersCount={this.props.setTotalUsersCount}
        />
    }
}

let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


// props.setUsers(
//     [
//         {
//             id: v1(),
//             avatar: src1,
//             followed: true,
//             fullName: 'Dmitry',
//             status: 'I am a boss.',
//             location: {city: 'Minsk', country: 'Belarus'}
//         },
//         {
//             id: v1(),
//             avatar: src2,
//             followed: true,
//             fullName: 'Sveta',
//             status: 'Hello!!!',
//             location: {city: 'Minsk', country: 'Belarus'}
//         },
//         {
//             id: v1(),
//             avatar: src3,
//             followed: false,
//             fullName: 'Ignat',
//             status: 'Yo!!',
//             location: {city: 'Kiev', country: 'Ukraine'}
//         },
//         {
//             id: v1(),
//             avatar: src4,
//             followed: false,
//             fullName: 'Valera',
//             status: 'I am fine!',
//             location: {city: 'Bialystok', country: 'Poland'}
//         },
//     ]
// )