import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(110, 118, 125, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  width: 590px;
  height: 625px;
  background-color: #15202b;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 5em;
  color: wheat;
  display: flex;
  justify-content: center;
`;

export const CloseButton = styled.div`
  margin-top: 20px;
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`;
