import styles from './../scss/auth.module.scss'
import AuthInputForms from './AuthInputForm/AuthInputForm';


export default function SignUp(props: SignHocToCompPropsType) {
    return (
        <div className={styles.reg}>
            <AuthInputForms {...props} bgcolor='mediumseagreen' buttonText="Sign up" />
        </div>)
}