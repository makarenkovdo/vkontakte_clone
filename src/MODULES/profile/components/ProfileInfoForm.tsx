import styles from './profile.module.scss'

export const ProfileInfoForm = (): React.ReactElement => {
    return <div className={styles.profile}>
        <div className={styles.profile1}><h2>Andrey Makarenkov</h2></div>
        <div className={styles.profile2}><div>Birthday: June 19, 1991</div><div>Current city: Bryansk</div> </div>
        <div className={styles.profile3}><div><h3>11 11 42</h3></div><div>friends photos tracks</div></div>
    </div>
}