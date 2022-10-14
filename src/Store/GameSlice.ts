import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    platformActivated: {},
    platformSeleteced: 0
}

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        platformSelect: (state: any, action: any) => {
            state.platformSeleteced = action.payload.id
        }
    }
})


export type {initialState}
export {gameSlice}

