import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg" alt="nature"/>*/}
            {/*</div>*/}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt="profile picture"/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;