import React from 'react';
import classes from './ProfileInfo.module.css';
import profile_image from '../../../images/profile_image.jpg'

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.item}>
                <img src={profile_image}/>
            </div>
            <div className={classes.descriptionBlock}>
                ava+description
            </div>
               </div>
    );
}

export default ProfileInfo;