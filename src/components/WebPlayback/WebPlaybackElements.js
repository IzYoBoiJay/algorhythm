import styled from "styled-components";
import { BsPlayCircle, BsFillPauseCircleFill } from "react-icons/bs";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { FaItunesNote } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import { FiShare } from "react-icons/fi";

export const PlaybackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 20px;
  padding: 13%;
  height: 50%;
  background-color: #ccefcb;
`;

export const SongPicture = styled.div`
  padding: 6%;
  border-radius: 4px;
  border: none;
  background-image: url(${({ image }) => image});
  background-size: cover;
  width: 100%;
  aspect-ratio: 1;
`;

export const NowPlaying = styled.div`
  position: relative;
  text-align: center;
  padding: 20px;
`;

export const NowPlayingName = styled.h1`
  position: relative;
  color: #000000;
  font-family: "Inter", sans-serif;
  font-size: 1.1vw;
  font-weight: 550;
  //breakpoints
  @media screen and (max-width: 900px) {
    font-size: 2.1vw;
  }
  @media screen and (max-width: 750px) {
    font-size: 2.6vw;
  }
  @media screen and (max-width: 600px) {
    font-size: 3.1vw;
  }     
`;

export const NowPlayingArtist = styled.h2`
  position: relative;
  color: #000000;
  font-family: "Inter", sans-serif;
  font-size: 1.1vw;
  padding-top: 7px;
  font-weight: 400;
  //breakpoints
  @media screen and (max-width: 900px) {
    font-size: 2.1vw;
  }
  @media screen and (max-width: 750px) {
    font-size: 2.6vw;
  }
  @media screen and (max-width: 600px) {
    font-size: 3.1vw;
  }     
  
`;

export const NowPlayingAlbum = styled.h2`
  position: relative;
  color: #585858;
  font-family: "Inter", sans-serif;
  font-size: 1.1vw;
  padding-top: 7px;
  font-weight: 500;
  //breakpoints
  @media screen and (max-width: 900px) {
    font-size: 2.1vw;
  }
  @media screen and (max-width: 750px) {
    font-size: 2.6vw;
  }
  @media screen and (max-width: 600px) {
    font-size: 3.1vw;
  }     
`;

export const WarningText = styled.h1`
  color: red;
  position: relative;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 1vw;
  padding-top: 10px;
  font-weight: 400;
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

export const Box = styled.div`
  padding: 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShareContainer = styled.div`
  padding: 5px;
  width: fit-content;
`;

export const ShareText = styled.h2`
  position: relative;
  color: #585858;
  font-family: "Inter", sans-serif;
  font-size: 1vw;
  padding-top: 1.5px;
  font-weight: 500;
  //breakpoints
  @media screen and (max-width: 900px) {
    font-size: 2.5vw;
  }
  @media screen and (max-width: 750px) {
    font-size: 3vw;
  }
  @media screen and (max-width: 600px) {
    font-size: 3.5vw;
  }     
`;

export const Share = styled(FiShare)`
  color: #585858;
  font-size: 1.3vw;
  //breakpoints
  @media screen and (max-width: 900px) {
    font-size: 2.3vw;
  }
  @media screen and (max-width: 750px) {
    font-size: 2.8vw;
  }
  @media screen and (max-width: 600px) {
    font-size: 3.3vw;
  }       
`;

export const Play = styled(BsPlayCircle)`
  color: #585858;
  transform: scale(2);
  margin: 5%;
  cursor: pointer;
`;

export const Pause = styled(BsFillPauseCircleFill)`
  color: #585858;
  transform: scale(2);
  margin: 5%;
  cursor: pointer;
`;

export const SkipNext = styled(BiSkipNext)`
  color: #585858;
  transform: scale(2);
  margin: 15%;
  cursor: pointer;
`;

export const SkipPre = styled(BiSkipPrevious)`
  color: #585858;
  transform: scale(2);
  margin: 15%;
  cursor: pointer;
`;

export const MusicNote = styled(FaItunesNote)`
  color: #585858;
  font-size: 0.9vw;
`;

export const Warning = styled(RiErrorWarningLine)`
  color: red;
  transform: scale(1.5);
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
`;
