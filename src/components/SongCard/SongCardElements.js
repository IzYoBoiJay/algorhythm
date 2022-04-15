import styled from 'styled-components';

export const SongContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 16.5vw;
    border-radius: 13px;
    background-color: #CCEFCB;

    //breakpoints
    @media screen and (max-width: 900px) {
        width: 30.5vw;
    }
    @media screen and (max-width: 750px) {
        width: 58.5vw;
    }
    @media screen and (max-width: 600px) {
        width: 60.5vw;
    }    
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

    //Commented out, causes song pictures to overlap with text
    
    //breakpoints
   @media screen and (max-width: 900px) {
        width: 6vw;
        height: 6vw;
        
    }
    @media screen and (max-width: 750px) {
        width: 7vw;
        height: 7vw;
    }
    @media screen and (max-width: 600px) {
        width: 9vw;
        height: 9vw;
    }
        
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
    //breakpoints
    @media screen and (max-width: 900px) {
        font-size: 1.9vw;
        left: 8vw;

    }
    @media screen and (max-width: 750px) {
        font-size: 2.4vw;
        left: 9vw;
    }
    @media screen and (max-width: 600px) {
        font-size: 2.9vw;
        left: 11vw;
    }    
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
    //breakpoints
    @media screen and (max-width: 900px) {
        font-size: 1.8vw;
        left: 8vw;

    }
    @media screen and (max-width: 750px) {
        font-size: 2.3vw;
        left: 9vw;

    }
    @media screen and (max-width: 600px) {
        font-size: 2.8vw;
        left: 11vw;
    }   
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
    //breakpoints
    @media screen and (max-width: 900px) {
        font-size: 1.8vw;
        left: 8vw;
    }
    @media screen and (max-width: 750px) {
        font-size: 2.3vw;
        left: 9vw;
    }
    @media screen and (max-width: 600px) {
        font-size: 2.8vw;
        left: 11vw;
    }   
`;