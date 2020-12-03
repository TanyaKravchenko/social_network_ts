import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.header}>
            <header >
                <img src={'https://www.strunkmedia.com/wp-content/uploads/2018/05/bigstock-222496366.jpg'} alt={'avatar'}/>
            </header>
        </div>
    );
}

export default Header;
