import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    platformActivated: false,
    platformSeleteced: 0
}

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        platformSelect: (state: any, action: any) => {
            state.platformSeleteced = action.payload.id
            state.platformActivated = action.payload.playerSide
        }
    }
})


export type {initialState}
export {gameSlice}

