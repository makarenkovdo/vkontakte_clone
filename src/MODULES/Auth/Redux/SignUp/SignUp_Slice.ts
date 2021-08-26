import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
export const signUp_postInputs = createAction<[string, string, string]>('signUp_postInputs')

const signUp_Slice = createSlice({
    name: 'signUp_SliceState',
    initialState: {
        signUpStatus: false,
        errorStatus: false,
    },
    reducers: {
        signUp_setSuccess(state, action: PayloadAction<Array<string>>) {
            state.signUpStatus = true
        },
        signUp_setError(state) {
            state.errorStatus = true
        },
    },
    // extraReducers: (builder) => {
    //     // Add reducers for additional action types here, and handle loading state as needed
    //     builder.addCase(signUp_postInputs, (state, action) => {

    //     })
    // },




})

// interface signUp_Slice_INTF {
//     name: string,

// }

export const { signUp_setSuccess, signUp_setError } = signUp_Slice.actions
export default signUp_Slice.reducer