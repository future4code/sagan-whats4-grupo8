import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import MainContainer from "./Components/MainContainer/MainContainer";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContainer></MainContainer>
      <Footer />
    </div>
  );
}

export default App;
