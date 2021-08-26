import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
export const signIn_postInputs = createAction<[string, string]>('signIn_postInputs')
interface signIn_postInputs_payload_INTF {

}

const signIn_Slice = createSlice({
    name: 'signIn_SliceState',
    initialState: {
        displayName: '',
        signInStatus: false,
        errorStatus: false,
    },
    reducers: {
        signIn_setSuccess(state, action: PayloadAction<string>) {
            console.log('sdf');

            state.displayName = action.payload
            state.signInStatus = true
        },
        signIn_setError(state) {
            state.errorStatus = true
        },
        signIn_logOut(state) {
            state.signInStatus = false
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(signIn_postInputs, (state, action) => {

        })
    },




})

// interface signIn_Slice_INTF {
//     name: string,

// }

export const { signIn_setSuccess, signIn_setError, signIn_logOut } = signIn_Slice.actions
export default signIn_Slice.reducer