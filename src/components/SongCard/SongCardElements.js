import styled from 'styled-components';

export const SongContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 16.5vw;
    border-radius: 13px;
    background-color: #CCEFCB;
`;

export const SongPicture = styled.button`
    position: relative;
    width: 4vw;
    height: 4vw;
    left: 1.5vw;
    top: 1.7vw;
    border-radius: 13px;
    border: none;
    background-image: url(${({ image }) => image});
    background-size: cover;
    cursor: pointer;
`;

export const Title = styled.h1`
    position: relative;
    bottom: 2.5vw;
    left: 6vw;
    color: #000000;
    padding-right: 50%;
    font-family: "Inter", sans-serif;
    font-size: 0.9vw;
    font-weight: 600;
`;

export const AlbumName = styled.h2`
    position: relative;
    bottom: 2.5vw;
    left: 6vw;
    color: #757575;
    padding-top: 5px;
    font-family: "Inter", sans-serif;
    font-size: 0.8vw;
    font-weight: 600;
`;

export const ArtistName = styled.h3`
    position: relative;
    bottom: 2.5vw;
    left: 6vw;
    padding-top: 5px;
    color: #757575;
    font-family: "Inter", sans-serif;
    font-size: 0.8vw;
    font-weight: 400;
`;