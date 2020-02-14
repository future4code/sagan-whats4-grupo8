import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import MainContainer from "./Components/MainContainer/MainContainer";
import Footer from "./Components/Footer/Footer";
import MessagesContainer from "./Components/MessagesContainer/MessagesContainer";
import styled from "styled-components";

const IndieFont = styled.span`
  font-family: "Indie Flower", cursive;
  font-size: 1.1rem;
`;

const Margin = styled.p`
  margin: 0.25rem 0.3rem;
  padding: 0.5rem;
  background: #fff;
`;

const Messages = styled.div`
  displa: flex;
  flex-direction: column;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { username: "lfvirtuoso", message: "Oi, tudo bem?" },
        { username: "lfvirtuoso", message: "Tudo sim, e com você?" }
      ],
      teste: ["item", "item2"]
    };
  }

  addMessage = (user, message) => {
    this.setState({ messages: { username: user, message: message } });
  };

  render() {
    const showMessages = this.state.messages.map((el, index) => {
      return (
        <Margin>
          <IndieFont>{el.username}</IndieFont>:&nbsp;
          {el.message}
        </Margin>
      );
    });

    return (
      <div className="App">
        <Navbar />
        <MainContainer>
          <MessagesContainer>
            <Messages>{showMessages}</Messages>
          </MessagesContainer>
        </MainContainer>
      </div>
    );
  }
}

export default App;
