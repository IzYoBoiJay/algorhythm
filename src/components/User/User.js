import styled from 'styled-components';

export const UserCointainer = styled.div`
    position: relative;
`;

export const ProfilePicture = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    border-radius: 50%;
    border: none;
    background-image: url(${({ image }) => image});
    background-size: cover;
    width: 3vw;
    height: 3vw;
`;
export const UsernameContainer = styled.div`
    margin: 6%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 4%;
    position: relative;
    width: ${({ width }) => width}px;
    border-radius: 23px;
    background-color: #DBF4DB;
`;
export const Username = styled.h1`
    text-align: center;
    position: relative;
    color: #757575;
    font-family: "Inter", sans-serif;
    font-size: 1vw;
    font-weight: 400;
    line-height: 20px;
`;

