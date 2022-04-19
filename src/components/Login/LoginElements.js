import styled from "styled-components";
import imageBackground from "../../images/imageBackground.jpg";

export const LoginContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${imageBackground});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const LoginContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const LoginItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const LoginH1 = styled.div`
  font-size: 50px;
  margin-bottom: 1rem;
  box-shadow: 3px 5px #fff;
  letter-spacing: 3px;
`;

//Paragraph Element
export const LoginP = styled.p`
  font-size: 25px;
  margin-bottom: 2rem;
`;

export const LoginHyperlink = styled.a`
  text-align: center;
  text-decoration: none;
  font-size: 16px;

  background: #1db954;
  color: #191414;
  white-space: nowrap;

  border-radius: 30px;
  padding: 16px 64px;

  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #191414;
    color: #fff;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }
`;
