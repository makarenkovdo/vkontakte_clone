import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
export const signInPostInputs = createAction<signInInputDataType>('signInPostInputs')


const signInSlice = createSlice({
    name: 'signInSliceState',
    initialState: {
        displayName: '',
        signInStatus: false,
        errorStatus: false,
    },
    reducers: {
        signInSetSuccess(state, action: PayloadAction<string>) {
            state.displayName = action.payload
            state.signInStatus = true
        },
        signInSetError(state) {
            state.errorStatus = true
        },
        signInLogOut(state) {
            state.signInStatus = false
        },
    },
    // extraReducers: (builder) => {
    //     // Add reducers for additional action types here, and handle loading state as needed
    //     builder.addCase(signInPostInputs, (state, action) => {

    //     })
    // },




})

// interface signIn_Slice_INTF {
//     name: string,

// }

export const { signInSetSuccess, signInSetError, signInLogOut } = signInSlice.actions
export default signInSlice.reducer