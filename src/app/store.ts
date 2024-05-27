import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "@/featuers/player/playerSlice";

export const store = configureStore({
  reducer: {
    player: playerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
