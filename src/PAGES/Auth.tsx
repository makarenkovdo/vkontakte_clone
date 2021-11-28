import styles from './../modules/auth/hoc/scss/auth.module.scss'
// import SignInContainer from '../modules/auth/components/SignIn/SignInContainer'
// import SignUpContainer from '../modules/auth/components/hoc/SignHoc'
import { Icon28LogoVkColor } from '@vkontakte/icons'
import SignIn from '../modules/auth/hoc/components/SignIn'
import SignUp from '../modules/auth/hoc/components/SignUp'
import SignHoc from '../modules/auth/hoc/SignHoc'

export default function Auth(): React.ReactElement {

    return (
        <div className={styles.container}>

            {/* TODO: move to separated component */}
            <header className={styles.header}><div ><Icon28LogoVkColor width={32} height={32} /></div></header>
            <div className={styles.main}><h1>Listen to ad-free music
                with a VK Combo subscription
            </h1><h2>30-day subscription for free after signing up</h2></div>

            <SignHoc SignComponent={SignIn} />
            <SignHoc SignComponent={SignUp} />
            {/* <SignHoc SignComponent={AuthInputForms} /> */}




            <footer className={styles.button}>FOOTER</footer>
            {/* <FeedUI_SignUpSucessModal /> */}


        </div>
    )
}