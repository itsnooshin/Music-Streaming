import { createSlice } from "@reduxjs/toolkit";

interface ProfileSinger {
  id: number;
  name: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  radio: boolean;
  tracklist: string;
  type: string;
}

interface Inforamtiom {
  id: number;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: true;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  md5_image: string;
  position: number;
  artist: ProfileSinger;
}

interface Player {
  playing: boolean;
  currentTrack: Inforamtiom | null;
  progress: number;
}

const initialState: Player = {
  playing: false,
  currentTrack: null,
  progress: 0,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    play: (state) => {
      state.playing = true;
    },
    pause: (state) => {
      state.playing = false;
    },
    setTrack: (state, action) => {
      state.currentTrack = action.payload;
    },
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
  },
});

export const { play, pause, setTrack, setProgress } = playerSlice.actions;

export default playerSlice.reducer;
