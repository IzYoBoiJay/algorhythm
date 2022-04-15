import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
export const UsernameContainer = styled.div`
  margin: 6%;
  display: flex;
  width: fit-content;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 23px;
  background-color: #dbf4db;
  margin-bottom: 15px; 
`;
export const Username = styled.h1`
  text-align: center;
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
