import React from "react";
import styled from "styled-components";

const MessagesArea = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  border: 1px dotted #444;
  width: 50%;
  height: 50vh;
  overflow-y: auto;
`;

const MessagesContainer = props => {
  return <MessagesArea>{props.children}</MessagesArea>;
};

export default MessagesContainer;
