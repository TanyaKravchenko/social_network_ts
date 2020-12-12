import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    unfollow,
    UserType, toggleFollowingProgress, getUsers
} from '../redux/users-reducer';
import Users from './Users';
import Preloader from '../Preloader/Preloader';
import {RootState} from '../redux/redux-store';

type UsersContainerPropsType = {
    users: Array<UserType>
    unfollow: (userID: string) => void
    follow: (userID: string) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    isFetching: boolean
    toggleFollowingProgress: (isFetching: boolean, userId: string) => void
    followingInProgress:Array<string>
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                setCurrentPage={this.props.setCurrentPage}
                followingInProgress={this.props.followingInProgress}
            />
            </>
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
})(UsersContainer);


// let mapDispatchToProps = (dispatch: (action: UsersActionsType) => void) => {
//     return {
//         follow: (userID: string) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID: string) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
//}

//export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);



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