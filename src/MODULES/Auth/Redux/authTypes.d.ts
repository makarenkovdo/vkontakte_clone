declare global {
    interface signInInputDataType {
        email: string,
        password: string,
        returnSecureToken: boolean

    }
    interface signUpInputDataType {
        email: string,
        password: string,
        displayName: string
        returnSecureToken: boolean
    }

    //action types

    interface signInPostInputsType {
        type: string,
        payload: signInInputDataType
    }

    interface signUpPostInputsType {
        type: string,
        payload: signUpInputDataType
    }

    //signHoc
    interface signHocPropsType {
        SignComponent: typeof SignUp
    }

    interface SignHocToCompPropsType {
        emailRef: React.MutableRefObject<HTMLInputElement | null>,
        loginRef?: React.MutableRefObject<HTMLInputElement | null>,
        passwRef: React.MutableRefObject<HTMLInputElement | null>,
        buttonHandler: buttonHandlerType,
        bgcolor: string,
        buttonText: string,

    }
}
export { }