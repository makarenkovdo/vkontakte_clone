import styles from './../scss/auth.module.scss'
import AuthInputForms from './container/AuthInputForms';


export default function SignIn(props: any) {
    const { emailRef, passwRef, buttonHandler } = props
    return (
        <div className={styles.sign}>
            <AuthInputForms emailRef={emailRef} passwRef={passwRef} buttonHandler={buttonHandler} />
            234234
        </div>)
}