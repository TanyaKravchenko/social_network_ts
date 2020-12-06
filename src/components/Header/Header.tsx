import React from 'react';
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom';

export type MapPropsToType = {
    isAuth: boolean
    login: string | null
}

export type DispatchToPropsType = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => void
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
                            {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
