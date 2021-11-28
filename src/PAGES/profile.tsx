import React from 'react'
import Header from '../global/components/Header/HeaderContainer'
import Nav from '../global/components/Nav/NavContainer'
import styles from './../modules/profile/components/profile.module.scss'
import { AvatarForm } from './../modules/profile/components/AvatarForm'
import { FollowingForm } from './../modules/profile/components/FollowingForm'
import { FriendListForm } from './../modules/profile/components/FriendListForm'
import { OwnNewsContainer } from './../modules/profile/components/OwnNewsContainer'
import { GalleryForm } from './../modules/profile/components/GalleryForm'
import { ProfileInfoForm } from './../modules/profile/components/ProfileInfoForm'


export const Profile = (): React.ReactElement => {
    return (<div className={styles.pageContainer}>
        {/* {isLoading
            ? <CircularProgress />
            : */}
        <Nav />
        <Header />
        <div className={styles.centralForms}>
            <AvatarForm />
            <FriendListForm />
            <FollowingForm />
        </div>
        <div className={styles.rightForms}>
            <ProfileInfoForm />
            <OwnNewsContainer />
            <GalleryForm />
        </div>



    </div>)
}

