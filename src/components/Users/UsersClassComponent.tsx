import React from 'react';
import axios from 'axios';
import {UserType} from '../redux/users-reducer';
import classes from '../Users/Users.module.css';
import avatar from '../../images/avatar3.jpg';

type UsersPropsType = {
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

class Users extends React.Component<UsersPropsType> {
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
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(page => {
                   return <span
                       className={this.props.currentPage === page ? classes.selectedPage : ''}
                       onClick={(e) => {this.onPageChanged(page)}}
                   >{page}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div className={classes.userAvatar}>
                        <img src={u.photos.small != null ? u.photos.small : avatar}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                        <span>
                    <span>
                      <div>{u.name}</div>
                      <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                    </div>
                )
            }
        </div>
    }
}

export default Users;


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