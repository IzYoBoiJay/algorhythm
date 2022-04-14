import { createContext } from "react";

const defaultTrack = {
  albumArt: null,
  albumName: null,
  songName: null,
  artists: null,
  isPaused: null,
};

const PlaybackContext = createContext(defaultTrack);

export default PlaybackContext;
