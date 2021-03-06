import React from 'react';
import {UserType} from '../../redux/users-reducer';
import classes from '../Users/Users.module.css';
import avatar from '../../images/avatar3.jpg';
import {NavLink} from 'react-router-dom';

type UsersPropsType = {
    users: Array<UserType>
    unfollow: (userID: string) => void
    follow: (userID: string) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<string>
}

let Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map((page, index) => {
                    return <span
                        key={index}
                        className={props.currentPage === page ? classes.selectedPage : ''}
                        onClick={(e) => {
                            props.onPageChanged(page)
                        }}
                    >{page}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div className={classes.userAvatar}>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : avatar} alt={'avatar'}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button
                                disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {props.unfollow(u.id)}}
                            >Unfollow</button>
                            : <button
                                disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {props.follow(u.id)}}
                            >Follow</button>
                        }
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
        </div>);
}

export default Users;

