import React, { useState, useEffect } from 'react';
import
{
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
    ShareText
} from './WebPlaybackElements'
import GetUserInfo from '../User'

const track = {
    name: "",
    album: {
        images: [
            { url: "" }
        ]
    },
    artists: [
        { name: "" }
    ]
}

function WebPlayback(props) {

    const [is_paused, setPaused] = useState(false);
    const [is_active, setActive] = useState(false);
    const [player, setPlayer] = useState(undefined);
    const [current_track, setTrack] = useState(track);

    useEffect(() => {

        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;

        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = () => {

            const player = new window.Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: cb => { cb(props.token); },
                volume: 0.5
            });

            setPlayer(player);

            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
            });

            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            player.addListener('player_state_changed', ( state => {

                if (!state) {
                    return;
                }

                setTrack(state.track_window.current_track);
                setPaused(state.paused);

                player.getCurrentState().then( state => { 
                    (!state)? setActive(false) : setActive(true) 
                });

            }));

            player.connect();

        };
    }, [props.token]);

    if (!is_active) { 
        return (
            <PlaybackContainer>
                <GetUserInfo token={props.token}/>
                <Warning/>
                <WarningText>Instance not active. Transfer your playback using your Spotify app</WarningText>
            </PlaybackContainer>)
    } else {
        return (
            <PlaybackContainer>
                <GetUserInfo token={props.token}/>
                <SongPicture image={current_track.album.images[0].url} alt=""/>
                <NowPlaying>
                    <NowPlayingName>{current_track.name}</NowPlayingName>
                    <NowPlayingArtist>{current_track.artists[0].name}</NowPlayingArtist>
                    <NowPlayingAlbum><MusicNote/>&nbsp;{current_track.album.name}&nbsp;<MusicNote/></NowPlayingAlbum>
                    <Box>
                        <SkipPre onClick={() => { player.previousTrack() }}/>
                        <div onClick={() => { player.togglePlay() }}>
                            { is_paused ? <Play/>:<Pause/>}
                        </div>
                        <SkipNext onClick={() => { player.nextTrack() }}/>
                    </Box>
                </NowPlaying>
                <ShareContainer>
                    <Share/>&nbsp;
                    <ShareText>Share</ShareText>
                </ShareContainer>
            </PlaybackContainer>
        );
    }
}

export default WebPlayback