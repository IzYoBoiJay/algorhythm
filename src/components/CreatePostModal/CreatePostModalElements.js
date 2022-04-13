import styled from "styled-components";
import { CloseO } from "@styled-icons/evil/CloseO";

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
  position: relative;
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

export const CloseButton = styled(CloseO)`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0;
  right: 0;
  &:hover {
    cursor: pointer;
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  margin-bottom: 75px;
`;

export const ModalFormLabel = styled.label`
  padding-top: 1em;
`;

export const TextBox = styled.textarea`
  width: 560px;
  height: 400px;
  display: flex;
  text-align: left;
  padding: 15px 10px 10px 10px;
  border-radius: 1.1em;
`;

export const HashtagsBox = styled.input`
  width: 560px;
  display: flex;
  flex-direction: column;
  text-align: left;
  position: relative;
  padding: 15px 10px 15px 10px;
  border-radius: 1.1em;
  margin-top: 10px;
`;

export const SubmitButton = styled.input`
  position: absolute;
  right: 10px;
  bottom: 10px;
  background: wheat;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  &:hover {
    background: #fff;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    color: #000;
  }
`;
