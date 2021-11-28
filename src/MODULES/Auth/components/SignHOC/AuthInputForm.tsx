import styles from './../../styles/auth.module.scss'

export default function AuthInputForms(props: SignHocToCompPropsType) {
    console.log('props: ', props);

    const { emailRef, passwRef, buttonHandler, loginRef, bgcolor, buttonText } = props

    return (
        <>
            <input
                ref={emailRef}
                className={styles.input}
                type="text"
                placeholder="Phone or email" />
            {loginRef
                ? (<input
                    ref={loginRef}
                    className={styles.input}
                    type="text"
                    placeholder="Login" />)
                : (<div></div>)
            }
            <input
                ref={passwRef}
                className={styles.input}
                type="password"
                placeholder="Password" />
            <button
                onClick={buttonHandler}
                style={{ backgroundColor: bgcolor, width: 300 }}
            >{buttonText}</button>
        </>
    )
}