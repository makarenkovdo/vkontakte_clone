import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
export const signUpPostInputs = createAction<[string, string, string]>('signUpPostInputs')

const signUpSlice = createSlice({
    name: 'signUpSliceState',
    initialState: {
        signUpStatus: false,
        errorStatus: false,
    },
    reducers: {
        signUpSetSuccess(state, action: PayloadAction<Array<string>>) {
            state.signUpStatus = true
        },
        signUpSetError(state) {
            state.errorStatus = true
        },
    },
    // extraReducers: (builder) => {
    //     // Add reducers for additional action types here, and handle loading state as needed
    //     builder.addCase(signUpPostInputs, (state, action) => {

    //     })
    // },




})

// interface signUpSlice_INTF {
//     name: string,

// }

export const { signUpSetSuccess, signUpSetError } = signUpSlice.actions
export default signUpSlice.reducer