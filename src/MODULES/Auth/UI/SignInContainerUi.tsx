import { MouseEventHandler, useRef } from "react"
import styles from './../UI/Scss/Auth.module.scss'
import { useMyDispatch } from "../../../GLOBAL/Redux/Root/Store"
import { signIn_postInputs } from "../Redux/SignIn/SignIn_Slice"



export default function SignInContainerUi() {

    let inputEmailSignInRef = useRef<HTMLInputElement | null>(null)
    let inputPasswSignInRef = useRef<HTMLInputElement | null>(null)

    type auSI_Dispatch_SignInBuand_INTF = () => void;

    const dispatch = useMyDispatch()
    const authDispatch_SignInButHand: signIn_Dispatch_INTF = () => {
        if (inputEmailSignInRef.current?.value && inputPasswSignInRef.current?.value) {
            const email = inputEmailSignInRef.current?.value
            const password = inputPasswSignInRef.current?.value

            console.log('dispatch is working!');
            dispatch(signIn_postInputs([email, password]))
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
                onClick={() => authDispatch_SignInButHand()}
                className={styles.button}>Sign in</button>
                <a href="" >Forgot your password?</a></div>
        </div >
    )




}