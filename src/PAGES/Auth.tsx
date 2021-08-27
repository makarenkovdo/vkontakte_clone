import styles from './../MODULES/Auth/UI/Scss/Auth.module.scss'
import SignInContainerUi from '../modules/auth/components/SignIn/SignInContainerUi'
import SignUpContainerUi from '../modules/auth/components/SignUp/SignUpContainerUi'
import { Icon28LogoVkColor } from '@vkontakte/icons'

export default function Auth(): React.ReactElement {

    return (
        <div className={styles.container}>

            {/* TODO: to seperated component */}
            <header className={styles.header}><div ><Icon28LogoVkColor width={32} height={32} /></div></header>
            <div className={styles.main}><h1>Listen to ad-free music
                with a VK Combo subscription
            </h1><h2>30-day subscription for free after signing up</h2></div>

            <SignInContainerUi />
            <SignUpContainerUi />


            <footer className={styles.button}>FOOTER</footer>
            {/* <FeedUI_SignUpSucessModal /> */}


        </div>
    )
}