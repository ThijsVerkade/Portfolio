import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Body from "./Components/Body";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import PhpLogo from "./assets/images/php-logo.svg";
import LaravelLogo from "./assets/images/laravel-logo.svg";
import SymfonyLogo from "./assets/images/symfony-logo.svg";
import DockerLogo from "./assets/images/docker-logo.svg";
import JavascriptLogo from "./assets/images/javascript-logo.svg";
import TypescriptLogo from "./assets/images/typescript-logo.svg";
import ReactLogo from "./assets/images/react-logo.svg";
import VuejsLogo from "./assets/images/vuejs-logo.svg";
import ChessGameApp from "./assets/images/chess-game-app.png";
import ExperienceCard from "./Components/ExperienceCard";
import Card from "./Components/Card";

function App() {
  return (
      <div className="App bg-backgroundSecondary">
          <Header/>
          <Body/>
          <AboutMe/>
          <div
              className="mt-10 max-w-xl mx-auto px-8 py-6 space-y-6 bg-backgroundSecondary">
              <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                  Skills
              </h2>
              <Skills skills={[
                  {image: PhpLogo, title: "PHP"},
                  {image: LaravelLogo, title: "Laravel"},
                  {image: SymfonyLogo, title: "Symfony"},
                  {image: DockerLogo, title: "Docker"},
                  {image: JavascriptLogo, title: "Javascript"},
                  {image: TypescriptLogo, title: "Typescript"},
                  {image: ReactLogo, title: "React"},
                  {image: VuejsLogo, title: "Vuejs"}
              ]}/>
          </div>
          <div
              className="mt-10 max-w-4xl mx-auto px-8 py-6 space-y-6 bg-backgroundSecondary">
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                  Experience
              </h2>
              <ExperienceCard
                  title="Software Developer"
                  from="Jan 2022"
                  until="Present"
                  description="Developing awesome apps"
                  location="Worldwide"
                  website="https://www.example.com"
                  jobInfo="Fun place to work!"
                  skills={["JavaScript", "React", "Node.js"]}
              />
              <ExperienceCard
                  title="Software Developer"
                  from="Jan 2022"
                  until="Present"
                  description="Developing awesome apps"
                  location="Worldwide"
                  website="https://www.example.com"
                  jobInfo="Fun place to work!"
                  skills={["JavaScript", "React", "Node.js"]}
              />
          </div>
          <div
              className="mt-10 max-w-4xl mx-auto px-8 py-6 space-y-6  bg-backgroundSecondary">
              <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                  Hobby projects
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Card imageUrl={ChessGameApp} title="Chess game"/>
                  <Card imageUrl={ChessGameApp} title="Chess game"/>
                  <Card imageUrl={ChessGameApp} title="Chess game"/>
              </div>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
