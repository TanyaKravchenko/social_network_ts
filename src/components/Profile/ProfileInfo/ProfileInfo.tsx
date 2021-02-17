import React from 'react';
import classes from './ProfileInfo.module.css';
import profile_image from '../../../images/profile_image.jpg'
import Preloader from '../../common/Preloader/Preloader';
import {ProfileType} from '../../../redux/profile-reducer';
import ProfileStatus from './ProfileStatus'
//import {updateStatusPropsType} from '../ProfileContainer';
import avatar from '../../../images/avatar3.jpg';

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
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
                <img src={props.profile.photos.large ? props.profile.photos.small : avatar} alt={'photos'}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts.vk}</div>
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
}

export default ProfileInfo;