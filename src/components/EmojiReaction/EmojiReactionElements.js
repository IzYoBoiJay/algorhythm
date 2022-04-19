import styled from "styled-components";
import { CloseO } from "@styled-icons/evil/CloseO";

export const Emoji = styled.span`
  ${({ blueNumber }) =>
    blueNumber &&
    `
    color: blue;
  `}
`;

export const Container = styled.div`
  position: relative;
  border-radius: 15px;
  border: 1.75px solid #e1e1e1;
  display: inline-block;
  width: fit-content;
  margin-top: 13%;
  padding: 1%;
  span {
    white-space: nowrap;
    display: inline-block;
    cursor: pointer;
    padding: 5px;
    position: relative;
    left: 0.1rem;
  }
`;
