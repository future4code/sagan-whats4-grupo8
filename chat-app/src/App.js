import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import MainContainer from "./Components/MainContainer/MainContainer";
import Footer from "./Components/Footer/Footer";
import MessagesContainer from "./Components/MessagesContainer/MessagesContainer";
import styled from "styled-components";

const IndieFont = styled.span`
  padding: 0.45rem;
  border-radius: 5px;
  font-family: "Indie Flower", cursive;
  font-size: 1.1rem;
`;

const Margin = styled.p`
  margin: 0.25rem 0.3rem;
  padding: 0.75rem;
  border-radius: 10px;
  text-align: left;
`;

const Messages = styled.div`
  displa: flex;
  flex-direction: column;
  width: 100%;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { username: "@lfvirtuoso", message: "Oi, tudo bem?" },
        { username: "@thales123", message: "Tudo sim, e com você?" },
        { username: "@lfvirtuoso", message: "O que está fazendo?" },
        { username: "@Thales123", message: "Não te interessa!" }
      ]
    };
  }

  addMessage = (user, message) => {
    this.setState({ messages: { username: user, message: message } });
  };

  render() {
    const showMessages = this.state.messages.map((el, index) => {
      return (
        <Margin
          key={index}
          className={index % 2 === 0 ? "bg-blue" : "bg-purple"}
        >
          <IndieFont className={index % 2 === 0 ? "bg-black" : "bg-grey"}>
            {el.username}
          </IndieFont>
          &nbsp;
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
        <Footer />
      </div>
    );
  }
}

export default App;
