import styled from "styled-components";
import pfp from '../../images/bruh.jpg'

export const PostContainer = styled.div`
    position: relative;
    margin: auto;
    border-radius: 25px;
    border: 2px solid #E1E1E1;
    padding: 20px;
    width: 20%;
    height: 25%;
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
`;

export const ProfilePicture = styled.button`
    position: relative;
    border-radius: 50%;
    border: none;
    background-image: url(${pfp});
    background-size: cover;
    cursor: pointer;
    width: 50px;
    height: 50px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Username = styled.h1`
    position: relative;
    color: #757575;
    font-family: "Inter", sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
`;

export const PostText = styled.p`
    position: relative;
    padding-top: 5%;
    padding-bottom: 5%;
    font-family: "Inter", sans-serif;
    font-size: 0.8vw;
    font-weight: 400;
    line-height: 20px;
`;