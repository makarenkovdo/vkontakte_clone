declare global {
    //signIn_UI

    interface signIn_UI_signInInputs_INTF {
        inputEmailsignInRef: any,
        inputPasswsignInRef: any,
        signIn_Dispatch_signInBuand: signIn_Dispatch_signInBuand_INTF,


    }
    interface signIn_UI_signUpInputs_INTF {
        inputEmailsignUpRef: any,
        inputPasswsignUpRef: any,
        signIn_Dispatch_signUpBuand: signIn_Dispatch_signUpBuand_INTF,


    }

    type signIn_Dispatch_INTF = () => void;
}

export { }