import styled from "styled-components";

export const DashContainer = styled.div`
  height: ${(props) => (props.path === "/" ? "auto" : "100vh")};
  width: ${(props) => (props.path === "/" ? "auto" : "100vw")};
  overflow-y: ${(props) =>
    props.path === "/" || props.path === "/activity" ? "auto" : "hidden"};
  overflow-x: hidden;
`;
