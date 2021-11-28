import styles from './../scss/auth.module.scss'
import AuthInputForms from './AuthInputForm/AuthInputForm';

export default function SignIn(props: SignHocToCompPropsType) {
    const { emailRef, passwRef, buttonHandler } = props

    return (
        <div className={styles.sign}>
            <AuthInputForms emailRef={emailRef} passwRef={passwRef} buttonHandler={buttonHandler} bgcolor='rgb(81, 129, 184)' buttonText="Sign in" />
        </div>)
}