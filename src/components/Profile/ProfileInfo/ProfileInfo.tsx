import React from 'react';
import classes from './ProfileInfo.module.css';
import profile_image from '../../../images/profile_image.jpg'
import Preloader from '../../Preloader/Preloader';
import {ProfileType} from '../../redux/profile-reducer';
import ProfileStatus from './ProfileStatus'

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.item}>
                <img src={profile_image} alt={'profile_image'}/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt={'photos'}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts.vk}</div>
                <ProfileStatus status={'Hello'}/>
            </div>
        </div>
    );
}

export default ProfileInfo;