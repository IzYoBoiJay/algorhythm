import React, { useState, useEffect, useContext } from "react";
import {
  PlaybackContainer,
  SongPicture,
  NowPlaying,
  NowPlayingName,
  NowPlayingArtist,
  NowPlayingAlbum,
  Play,
  Pause,
  SkipNext,
  SkipPre,
  Box,
  MusicNote,
  WarningText,
  Warning,
  ShareContainer,
  Share,
  ShareText,
} from "./WebPlaybackElements";
import GetUserInfo from "../User";
import { Link } from "react-router-dom";

import UserContext from "../../contexts/UserContext";
import PlaybackContext from "../../contexts/PlaybackContext";

function WebPlayback(props) {
  const [is_active, setActive] = useState(false);
  const [player, setPlayer] = useState(undefined);
  const token = useContext(UserContext).token;
  const [playbackState, setPlaybackState] = useContext(PlaybackContext);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Algorhythm",
        getOAuthToken: (cb) => {
          cb(token);
        },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      player.addListener("initialization_error", ({ message }) => {
        console.error(message);
      });

      player.addListener("authentication_error", ({ message }) => {
        console.error(message);
      });

      player.addListener("account_error", ({ message }) => {
        console.error(message);
      });

      player.addListener("player_state_changed", (state) => {
        if (!state) {
          return;
        }

        setPlaybackState({
          picture: state.track_window.current_track.album.images[0].url,
          album: state.track_window.current_track.album.name,
          songName: state.track_window.current_track.name,
          artist: state.track_window.current_track.artists[0].name,
          isPaused: state.paused,
          songLink: state.track_window.current_track.uri,
        });

        player.getCurrentState().then((state) => {
          !state ? setActive(false) : setActive(true);
        });
      });

      player.connect();
    };
  }, [token]);

  if (!is_active) {
    return (
      <PlaybackContainer>
        <GetUserInfo />
        <Warning />
        <WarningText>
          Instance not active. Transfer your playback using your Spotify app
        </WarningText>
      </PlaybackContainer>
    );
  } else {
    return (
      <PlaybackContainer>
        <GetUserInfo />
        <SongPicture image={playbackState.picture} alt="" />
        <NowPlaying>
          <NowPlayingName>{playbackState.songName}</NowPlayingName>
          <NowPlayingArtist>{playbackState.artist}</NowPlayingArtist>
          <NowPlayingAlbum>
            <MusicNote />
            &nbsp;{playbackState.album}&nbsp;
            <MusicNote />
          </NowPlayingAlbum>
          <Box>
            <SkipPre
              onClick={() => {
                player.previousTrack();
              }}
            />
            <div
              onClick={() => {
                player.togglePlay();
              }}
            >
              {playbackState.isPaused ? <Play /> : <Pause />}
            </div>
            <SkipNext
              onClick={() => {
                player.nextTrack();
              }}
            />
          </Box>
        </NowPlaying>
        <ShareContainer>
          <Link
            style={{
              textDecoration: "none",
              color: "unset",
              display: "flex",
            }}
            to={"/create_post"}
          >
            <Share />
            &nbsp;
            <ShareText>Share</ShareText>
          </Link>
        </ShareContainer>
      </PlaybackContainer>
    );
  }
}

export default WebPlayback;
