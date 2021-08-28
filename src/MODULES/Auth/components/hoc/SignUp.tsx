import styles from './../scss/auth.module.scss'
import AuthInputForms from './container/AuthInputForms';


export default function SignUp(props: any) {
    const { emailRef, passwRef, loginRef, buttonHandler } = props
    return (
        <div className={styles.reg}>
            <AuthInputForms emailRef={emailRef} loginRef={loginRef} passwRef={passwRef} buttonHandler={buttonHandler} />
        </div>)
}