import React, { Component } from 'react';
import './Hero.css';
 
class Hero extends Component{
   render(){
       return(
            <div className="hero">
                <div className="hero-holder-text">
                    <h1 className="hero-text-large">Hello! I'm Logan</h1>
                    <p className="hero-text-small">And I Am A Web Developer</p>
                </div>

                <div className="hero-holder-images">
                {/* TODO: find some way to make these images better */}
                    <div className="hero-image-desk"></div>
                    <img className="hero-image-codingMonitor monitor-scale" src="/img/coding.svg" alt=""/>
                    {/* <img className="hero-image-keyboard" src="/img/desk/keyboard.svg" alt=""/> */}
                    {/* <img className="hero-image-mouse" src="/img/desk/mouse.svg" alt=""/> */}
                    <img className="hero-image-window window-slide-in" src="/img/desk/window.svg" alt=""/>
                    <img className="hero-image-shelf bookshelf-slide-in" src="/img/desk/book_shelf2.svg" alt=""/>
                    {/* <img className="hero-image-water" src="/img/desk/water.svg" alt=""/> */}
                </div>
            </div>
       );
   }
}
 
export default Hero;