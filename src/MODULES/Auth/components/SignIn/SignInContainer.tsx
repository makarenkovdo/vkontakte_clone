import { useRef } from "react"
import styles from './../scss/auth.module.scss'
import { useMyDispatch } from "../../../../global/rootRedux/store";
import { signInPostInputs } from "../../redux/signIn/signInSlice"



export default function SignInContainerUi() {
    const dispatch = useMyDispatch()


    let inputEmailSignInRef = useRef<HTMLInputElement | null>(null)
    let inputPasswSignInRef = useRef<HTMLInputElement | null>(null)

    type signInButtonHandlerType = () => void
    const signInButtonHandler: signInButtonHandlerType = () => {
        if (inputEmailSignInRef.current?.value && inputPasswSignInRef.current?.value) {
            const email = inputEmailSignInRef.current?.value
            const password = inputPasswSignInRef.current?.value
            dispatch(signInPostInputs([email, password]))
        }
    }

    return (
        < div className={styles.sign} >

            <input
                ref={inputEmailSignInRef}
                className={styles.input}
                type="email"
                placeholder="Phone or email" />

            <input
                ref={inputPasswSignInRef}
                className={styles.input}
                type="password"
                placeholder="Password" />
            <div><button
                onClick={() => signInButtonHandler()}
                className={styles.button}>Sign in</button>
                <a href="/auth" >Forgot your password?</a></div>
        </div >
    )




}