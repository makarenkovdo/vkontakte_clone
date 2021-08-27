import { useRef } from "react"
import styles from './../scss/auth.module.scss'
import { signUpPostInputs } from "../../redux/signUp/signUpSlice";
import { useMyDispatch } from "../../../../global/rootRedux/store";

export default function SignUpContainer() {
    type SignUpButtonHandlerType = () => void;

    let inputEmailSignUpRef = useRef<HTMLInputElement | null>(null)
    let inputLoginSignUpRef = useRef<HTMLInputElement | null>(null)
    let inputPasswSignUpRef = useRef<HTMLInputElement | null>(null)

    const dispatch = useMyDispatch()

    const SignUpButtonHandler: SignUpButtonHandlerType = () => {
        if (inputEmailSignUpRef.current?.value && inputPasswSignUpRef.current?.value && inputLoginSignUpRef.current?.value) {
            const email = inputEmailSignUpRef.current?.value
            const password = inputPasswSignUpRef.current?.value
            const displayName = inputLoginSignUpRef.current?.value
            console.log('inside dispatch');

            dispatch(signUpPostInputs([email, password, displayName]))


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
                onClick={SignUpButtonHandler}
                style={{ backgroundColor: 'mediumseagreen', width: 300 }}
            >Continue registration</button>

        </div>
    )

}

