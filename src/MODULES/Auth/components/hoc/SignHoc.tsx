import React, { useRef } from "react"
import { signUpPostInputs } from "../../redux/signUp/signUpSlice";
import { useMyDispatch } from "../../../../global/rootRedux/store";
import { signInPostInputs } from "../../redux/signIn/signInSlice";

export default function SignHoc(props: any) {
    const SignComponent = props.SignComponent
    const dispatch = useMyDispatch()

    let emailRef = useRef<HTMLInputElement | null>(null)
    let loginRef = useRef<HTMLInputElement | null>(null)
    let passwRef = useRef<HTMLInputElement | null>(null)

    type buttonHandlerType = () => void;
    const buttonHandler: buttonHandlerType = () => {
        interface inputDataType {
            email: string,
            password: string,
            displayName: string
        }
        const [email, password, displayName] = [emailRef.current?.value, passwRef.current?.value, loginRef.current?.value]
        let inputData = {
            email: email,
            password: password,
        } as inputDataType
        if (displayName) {
            inputData.displayName = displayName
            dispatch(signUpPostInputs(inputData))
        }
        else {
            dispatch(signInPostInputs(inputData))
        }

    }

    return (
        <>
            <SignComponent emailRef={emailRef} loginRef={loginRef} passwRef={passwRef} buttonHandler={buttonHandler} />
        </>
    )
}



