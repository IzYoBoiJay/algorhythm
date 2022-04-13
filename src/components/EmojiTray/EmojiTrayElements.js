import styled from 'styled-components';
import {Smiley} from '@styled-icons/octicons/Smiley'


export const Tray = styled.div`
    position: static;
    display: inline;
`

//Tray
export const TrayButtonIcon = styled(Smiley)`
    position: relative;
    border-radius: 50%;
    border: none;
    background-size: cover;
    cursor: pointer;
    width: 1.25vw;
    height: 1.25vw;
    right: 0.2vw;
    bottom: 0.1vw;
`

export const Emojis = styled.div`
    position: relative;
    display: inline-block;
    background-color: white;
    border: 1px solid grey;
    border-radius: 12px;
    margin-top: 5%;
`

export const EmojiButton = styled.button`
    position: relative; 
    background-color: white;
    border: 1px solid grey;
    border-radius: 12px;
    color: white;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 6px 6px;
`
export const Counter = styled.div`
    position: absolute;
    display: flexbox;

    margin-left: 0.5vw;

    height: 0.75vw;
    width: 0.75vw;
    left: 0.2vw;
    bottom: 0.1vh;

    border: 1px solid black;
    background-color: white;
    border-radius: 50%;

    color: black;
    font-size: 0.5vw;
    padding-left: 0.15vw;
`