import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    unfollow,
    UserType, toggleFollowingProgress, requestUsers
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {AppStateType} from '../../redux/redux-store';
import {compose} from 'redux';
import {
    getUsers,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress
} from '../../redux/users-selectors';

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
    followingInProgress: Array<string>
    requestUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
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

let mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers
    }))(UsersContainer);


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