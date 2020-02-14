import React from "react";
import styled from "styled-components";

const FormContainer = styled.section`
  display: flex;
  justify-content: flext-start;
  border: 1px solid #444;
  width: 50%;
  margin-top: 0.75rem;
`;

const UserInput = styled.input`
  padding: 0.75rem;
  background: #f4f4f4;
  width: 20%;
  outline: 0;
  border: none;
`;

const MessageInput = styled.input`
  padding: 0.75rem;
  width: 50%;
`;

const SendButton = styled.button`
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  background: #d9f4ff;
  text-transform: uppercase;
  width: 30%;
`;

const InputsAndButtons = props => {
  return (
    <FormContainer>
      <UserInput placeholder="Usuário" />
      <MessageInput placeholder="Digite uma mensagem" />
      <SendButton>Enviar</SendButton>
    </FormContainer>
  );
};

export default InputsAndButtons;
