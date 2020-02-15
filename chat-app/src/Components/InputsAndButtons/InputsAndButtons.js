import React, { Component } from "react";
import styled from "styled-components";

const FormContainer = styled.section`
  display: flex;
  justify-content: flext-start;
  border-bottom: 2px solid #444;
  width: 50%;
  margin-top: 0.75rem;
`;

const UserInput = styled.input`
  border-right: 1px dotted #444;
  border-left: none;
  border-bottom: none;
  border-top: none;
  padding: 0.75rem;
  background: #fff;
  width: 20%;
  outline: 0;
  // border: none;
`;

const MessageInput = styled.input`
  border-right: 1px dotted #444;
  border-left: none;
  border-bottom: none;
  border-top: none;
  padding: 0.75rem;
  width: 50%;
  outline: 0;
  // border: none;
`;

const SendButton = styled.button`
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  background: #edf9ff;
  text-transform: uppercase;
  width: 30%;
  outline: 0;
`;

class InputsAndButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      messageInput: ""
    };
  }

  addUsername = event => {
    this.setState({ userInput: event.target.value });
  };

  addUserMessage = event => {
    this.setState({ messageInput: event.target.value });
  };

  render() {
    return (
      <FormContainer>
        <UserInput
          placeholder="Usuário"
          onChange={this.addUsername}
          value={this.state.userInput}
        />
        <MessageInput
          placeholder="Digite uma mensagem"
          onChange={this.addUserMessage}
          value={this.state.messageInput}
        />
        <SendButton
          onClick={() => {
            this.props.addMessage(
              this.state.userInput,
              this.state.messageInput
            );
            this.setState({ userInput: "", messageInput: "" });
          }}
        >
          Enviar
        </SendButton>
      </FormContainer>
    );
  }
}

export default InputsAndButtons;
