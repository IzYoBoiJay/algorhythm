import { createContext } from "react";

const defaultTrack = {
  picture: null,
  album: null,
  title: null,
  artist: null,
  isPaused: null,
  songLink: null,
};

const PlaybackContext = createContext(defaultTrack);

export default PlaybackContext;
