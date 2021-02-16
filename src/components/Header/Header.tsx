import React from 'react';
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom';

export type MapPropsToType = {
    isAuth: boolean
    login: string | null
}

export type DispatchToPropsType = {
    logout: () => void
}

const Header: React.FC<MapPropsToType & DispatchToPropsType> = (props) => {
    return (
        <div className={classes.header}>
            <header>
                <div className={classes.headerContainer}>
                    <div className={classes.headerTop}>
                        <div className={classes.headerLogo}>
                            <img
                            src={'https://www.strunkmedia.com/wp-content/uploads/2018/05/bigstock-222496366.jpg'}
                            alt={'avatar'}/>
                        </div>
                        <div className={classes.loginBlock}>
                            {props.isAuth
                                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                                : <NavLink to={'/login'}>Login</NavLink>}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
