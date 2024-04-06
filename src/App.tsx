import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Body from "./Components/Body";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App bg-gray-900">
      <Header />
      <Body />
      <AboutMe />

      <Footer />
    </div>
  );
}

export default App;
