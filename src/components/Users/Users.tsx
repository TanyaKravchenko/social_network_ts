import React from 'react';
import {UserType} from '../redux/users-reducer';
import classes from '../Users/Users.module.css';
import {v1} from 'uuid';
import src1 from '../../images/avatar3.jpg';
import src2 from '../../images/avatar5.jpg';
import src3 from '../../images/avatar4.jpeg';
import src4 from '../../images/avatar1.png';

type UsersPropsType = {
    users: Array<UserType>
    unfollow: (userID: string) => void
    follow: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
}

let Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: v1(),
                    avatar: src1,
                    followed: true,
                    fullName: 'Dmitry',
                    status: 'I am a boss.',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: v1(),
                    avatar: src2,
                    followed: true,
                    fullName: 'Sveta',
                    status: 'Hello!!!',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: v1(),
                    avatar: src3,
                    followed: false,
                    fullName: 'Ignat',
                    status: 'Yo!!',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: v1(),
                    avatar: src4,
                    followed: false,
                    fullName: 'Valera',
                    status: 'I am fine!',
                    location: {city: 'Bialystok', country: 'Poland'}
                },
            ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div className={classes.userAvatar}>
                        <img src={u.avatar}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                    <span>
                    <span>
                      <div>{u.fullName}</div>
                      <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
                </div>
            )
        }
    </div>
}

export default Users;