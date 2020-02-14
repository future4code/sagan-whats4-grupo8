import React from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background: #f4f4f4;
`;

const MainContainer = props => {
  return <Main>{props.children}</Main>;
};

export default MainContainer;
