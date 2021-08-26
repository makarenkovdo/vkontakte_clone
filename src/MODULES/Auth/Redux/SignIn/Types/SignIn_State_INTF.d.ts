declare global {

    interface signIn_State_INTF {
        username: string,
        SignInSuccess: boolean,
        ErrorState: boolean,
    }

    interface signIn_Inputs_INTF {
        email: string,
        password: string,
        returnSecureToken: boolean,
    }

    enum SignInStatus_INTF {
        SUCCESS = 'SUCCESS',
        ERROR_MODAL = 'ERROR_MODAL',
        DISABLE = 'DISABLE',
    }

}
// Adding this exports the declaration file which Typescript/CRA can now pickup:
export { }

