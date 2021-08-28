import styles from './../scss/auth.module.scss'
import AuthInputForms from './AuthInputForm/AuthInputForm';


export default function SignUp(props: any) {
    const { emailRef, passwRef, loginRef, buttonHandler } = props
    return (
        <div className={styles.reg}>
            <AuthInputForms emailRef={emailRef} loginRef={loginRef} passwRef={passwRef} buttonHandler={buttonHandler} bgcolor='mediumseagreen' buttonText="Sign up" />
        </div>)
}