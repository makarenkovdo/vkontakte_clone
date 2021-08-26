declare global {

    interface signUp_State_INTF {
        signUpSucessState: boolean,
        signUpErrorState: boolean,
        signUpInputs: signUpInputs_INTF,

    }

    interface signUp_Inputs_INTF {
        email: string,
        password: string,
        returnSecureToken: boolean,
    }

}
// Adding this exports the declaration file which Typescript/CRA can now pickup:
export { }