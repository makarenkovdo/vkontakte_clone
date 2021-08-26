import { useRef } from "react"
import styles from './Scss/Auth.module.scss'
import { useMyDispatch } from "../../../GLOBAL/Redux/Root/Store"
import { signUp_postInputs } from "../Redux/SignUp/SignUp_Slice";

export default function SignUpContainer() {

    type signUp_Dispatch_SignUpButton_INTF = () => void;

    let inputEmailSignUpRef = useRef<HTMLInputElement | null>(null)
    let inputLoginSignUpRef = useRef<HTMLInputElement | null>(null)
    let inputPasswSignUpRef = useRef<HTMLInputElement | null>(null)

    const dispatch = useMyDispatch()

    const Dispatch_SignUpButHand: signUp_Dispatch_SignUpButton_INTF = () => {
        if (inputEmailSignUpRef.current?.value && inputPasswSignUpRef.current?.value && inputLoginSignUpRef.current?.value) {
            const email = inputEmailSignUpRef.current?.value
            const password = inputPasswSignUpRef.current?.value
            const displayName = inputLoginSignUpRef.current?.value
            console.log('inside dispatch');

            dispatch(signUp_postInputs([email, password, displayName]))


        }
    }



    return (
        <div className={styles.reg}>

            <input
                ref={inputEmailSignUpRef}
                className={styles.input}
                type="text"
                placeholder="Phone or email" />
            <input
                ref={inputLoginSignUpRef}
                className={styles.input}
                type="text"
                placeholder="Login" />

            <input
                ref={inputPasswSignUpRef}
                className={styles.input}
                type="password"
                placeholder="Password" />

            <button
                onClick={Dispatch_SignUpButHand}
                style={{ backgroundColor: 'mediumseagreen', width: 300 }}
            >Continue registration</button>

        </div>
    )

}

