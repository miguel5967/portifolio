import { Vector3 } from "@react-three/fiber";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  platformActivated: false,
  currPlayer: "player",
  player: {
    selects: [],
    position: [0, -2, 0] as Vector3,
  },
  computer: {
    selects: [],
    position: [0, 2, 0] as Vector3,
  },
  platform: [
    [-10.1, -2, 0],
    [0, -2, 0],
    [10.1, -2, 0],

    [-10.1, 2, 0],
    [0, 2, 0],
    [10.1, 2, 0],
  ],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    platformSelect: (state: any, action: any) => {
      const act = action.payload;
      let isPlayer = state.currPlayer === "player" ? act.id <= 2 : act.id > 2;

      if (isPlayer) {
        state[state.currPlayer].selects[0] = act.id;
      } else {
        state[state.currPlayer].selects[1] = act.id;
      }
    },

    fight: (state: any) => {
      let defend = state.platform[state.player.selects[0]];
      let attack = state.platform[state.player.selects[1]];
      
      if (state[state.currPlayer].position != defend) {
          state[state.currPlayer].position = defend;
        }
        
        //Posicao do tiro
        // state[state.currPlayer].position = attack;
        
        state.currPlayer = "computer";
        const genarator  = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
        console.log(genarator);
        defend = state.platform[genarator];

      if (state[state.currPlayer].position != defend) {
        state[state.currPlayer].position = defend;
      }

    },
    attack: (state: any) => {
      let attack = state.platform[state.player.selects[1]];
      state[state.currPlayer].position = attack;
    },
    deffend: (state: any) => {
      let deffend = state.platform[state.player.selects[0]];
      state[state.currPlayer].position = deffend;
    },
  },
});

export type { initialState };
export { gameSlice };
