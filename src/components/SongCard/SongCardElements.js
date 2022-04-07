import styled from 'styled-components';
import songPicture from '../../images/cheems.jpg'

export const SongContainer = styled.div`
    position: relative;
    margin: auto;
    border-radius: 25px;
    background-color: #CCEFCB;
`;

export const SongPicture = styled.button`
    position: relative;
    width: 75px;
    height: 75px;
    left: 1vw;
    top: 1.5vw;
    right:1vw;

    border-radius: 13px;
    border: none;

    background-image: url(${songPicture});
    background-size: cover;

    cursor: pointer;
`;

export const Title = styled.h1`
    position: relative;
    bottom: 2.5em;
    left: 30%;

    color: #000000;

    font-family: "Inter", sans-serif;
    font-size: 0.8vw;
    font-weight: 600;
`;

export const AlbumName = styled.h2`
    position: relative;
    bottom: 2.75em;
    left: 5.3vw;

    color: #757575;

    font-family: "Inter", sans-serif;
    font-size: 0.7vw;
    font-weight: 600;
`;

export const ArtistName = styled.h3`
    position: relative;
    bottom: 2.75em;
    left: 5.3vw;

    color: #757575;

    font-family: "Inter", sans-serif;
    font-size: 0.7vw;
    font-weight: 400;
`;