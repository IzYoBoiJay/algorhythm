import styled from 'styled-components';
import songPicture from '../../images/cheems.jpg'

export const SongContainer = styled.div`
    position: relative;
    display: inline-block;
    margin: auto;
    border-radius: 25px;
    padding-right: 30%;
    background-color: #CCEFCB;
`;

export const SongPicture = styled.button`
    position: relative;
    width: 3.5vw;
    height: 3.5vw;
    left: 1vw;
    top: 1.5vw;

    border-radius: 13px;
    border: none;

    background-image: url(${songPicture});
    background-size: cover;

    cursor: pointer;
`;

export const Title = styled.h1`
    position: relative;
    bottom: 2vw;
    left: 5vw;

    color: #000000;

    font-family: "Inter", sans-serif;
    font-size: 0.8vw;
    font-weight: 600;
`;

export const AlbumName = styled.h2`
    position: relative;
    bottom: 2vw;
    left:5vw;

    color: #757575;

    font-family: "Inter", sans-serif;
    font-size: 0.7vw;
    font-weight: 600;
`;

export const ArtistName = styled.h3`
    position: relative;
    bottom: 2vw;
    left: 5vw;

    color: #757575;

    font-family: "Inter", sans-serif;
    font-size: 0.7vw;
    font-weight: 400;
`;