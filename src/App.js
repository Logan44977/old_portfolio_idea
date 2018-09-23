import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';


class App extends Component {

  render() {
    return (
     <div className="app">
      <section className="app-section-hero">
        <Header/>
        <Hero/>
        <About/>
      </section>
      
      <section className="app-section-works">
          <h2 className="portfolio-h2">My Skills</h2>
          <Skills side='left' divId="html-css" title={"HTML & CSS"} img={"/img/skills/web-design.svg"} text={"<p>- Knowledge of HTML5 & CSS3</p><p>- Can use LESS & SaSS</p><p>- Build fully responsive websites</p>"}/>

          <Skills side="right" divId="react" title={"ReactJS"} img={"/img/skills/atom.svg"} text={"<p>- Build Websites using ReactJS framework </p><p>- Experience using NPM and Yarn</p><p>- Used React Router v4 for routing </p>"}/>

          <Skills side="left" divId="git" title={"Git"} img={"/img/skills/github-logo.svg"} text={"<p> - Knowledge of Gitlabs and Github</p><p>- Experience using git to collaborate with multiple developers</p>"}/>

          <Contact/>
        </section>

      <Footer/>
      


        {/* <div className="spacer"></div> */}
     </div>
    );
  }
}

export default App;
