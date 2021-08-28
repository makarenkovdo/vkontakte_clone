import styles from './../../scss/auth.module.scss'

export default function AuthInputForms(props: any) {
    const { emailRef, passwRef, loginRef, buttonHandler } = props
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
                style={{ backgroundColor: 'mediumseagreen', width: 300 }}
            >Continue registration</button>
        </>
    )
}