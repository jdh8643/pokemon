import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: [],
  reducers: {
    addPokemon: (state, action) => {
      // 이미 있는지 검증
      const isAreadySelelcted = state.some((item) => {
        return item && item.id === action.payload.id;
      });

      if (isAreadySelelcted) {
        alert("이미 저장된 포켓몬 입니다.");
        return;
      }

      if (state.length >= 6) {
        alert("6개 이상입니다");
        return;
      }

      state.push(action.payload);
    },
    deletePokemon: (state, action) =>
      state.filter((e) => e.id !== action.payload),
  },
});

export const { addPokemon, deletePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
