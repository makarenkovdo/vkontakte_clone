import { useRef } from "react"
import styles from './../scss/auth.module.scss'
import { signUpPostInputs } from "../../redux/signUp/signUpSlice";
import { useMyDispatch } from "../../../../global/rootRedux/store";

export default function SignUpContainer() {
    type SignUpButtonHandlerType = () => void;

    let emailRef = useRef<HTMLInputElement | null>(null)
    let loginRef = useRef<HTMLInputElement | null>(null)
    let passwRef = useRef<HTMLInputElement | null>(null)

    const dispatch = useMyDispatch()

    const SignUpButtonHandler: SignUpButtonHandlerType = () => {
        if (emailRef.current?.value && passwRef.current?.value && loginRef.current?.value) {
            const [email, password, displayName] = [emailRef.current?.value, passwRef.current?.value, loginRef.current?.value]
            const signUpInputData = {
                email: email,
                password: password,
                displayName: displayName,

            }
            // dispatch(signUpPostInputs(signUpInputData))


        }
    }



    return (
        <div className={styles.reg}>

            <input
                ref={emailRef}
                className={styles.input}
                type="text"
                placeholder="Phone or email" />
            <input
                ref={loginRef}
                className={styles.input}
                type="text"
                placeholder="Login" />

            <input
                ref={passwRef}
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

