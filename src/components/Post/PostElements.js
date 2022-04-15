import styled from "styled-components";

export const PostContainer = styled.div`
    flex-direction: column;
    position: relative;
    border-radius: 20px;
    border: 1.5px solid #E1E1E1;
    padding: 13%;
    // width: 20%;
    // height: 25%;
    // filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
`;

export const ProfilePicture = styled.button`
    position: relative;
    border-radius: 50%;
    border: none;
    background-image: url(${({ image }) => image});
    background-size: cover;
    cursor: pointer;
    width: 3vw;
    height: 3vw;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

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

export const Username = styled.h1`
    padding-top: 10%;
    position: relative;
    color: #757575;
    font-family: "Inter", sans-serif;
    font-size: 1vw;
    font-weight: 400;
    line-height: 20px;

    //breakpoints
    @media screen and (max-width: 900px) {
        font-size: 2vw;
    }
    @media screen and (max-width: 750px) {
        font-size: 2.5vw;
    }
    @media screen and (max-width: 600px) {
        font-size: 3vw;
    }    
`;

export const PostText = styled.p`
    position: relative;
    padding-top: 6%;
    padding-bottom: 6%;
    font-family: "Inter", sans-serif;
    font-size: 1vw;
    font-weight: 400;
    line-height: 20px;
    
    //breakpoints
    @media screen and (max-width: 900px) {
        font-size: 2vw;
    }
    @media screen and (max-width: 750px) {
        font-size: 2.5vw;
    }
    @media screen and (max-width: 600px) {
        font-size: 3vw;
    }
`;

export const PostFooter = styled.h1`
    padding-top: 10%;
    position: relative;
    color: #757575;
    font-family: "Inter", sans-serif;
    font-size: 1vw;
    font-weight: 400;
    line-height: 20px;

        //breakpoints
        @media screen and (max-width: 900px) {
        font-size: 2vw;
    }
    @media screen and (max-width: 750px) {
        font-size: 2.5vw;
    }
    @media screen and (max-width: 600px) {
        font-size: 3vw;
    }
`;