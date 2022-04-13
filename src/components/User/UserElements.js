import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  display: flex;
  width: fit-content;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 23px;
  background-color: #dbf4db;
  margin-bottom: 10px;
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
