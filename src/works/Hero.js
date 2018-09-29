import React, { Component } from 'react';
import './Hero.css';
 
class Hero extends Component{
   render(){
       return(
            <div className="hero">
                <div className="hero-holder-text">
                    <h1 className="hero-text-large">Works</h1>
                    <p className="hero-text-small">Check Out What I've Been Doing!</p>
                </div>

                <div className="worksHero-holder-image">
                    <div className="worksHero-div-whiteboard"/>
                    <div className="worksHero-div-desk"/>
                    <img alt="" className="worksHero-image-lamp" src="/img/works/lamp.svg"/>
                    <img alt="" className="worksHero-image-chair" src="/img/works/chair.svg"/>
                    <img alt="" className="worksHero-image-wireframe" src="/img/works/wireframe2.svg"/>
                    <div className="worksHero-div-wireframe"></div>

                    <img alt="" className="worksHero-image-menu" src="/img/works/to-do.svg"/>
                    <div className="worksHero-div-menu"></div>

                    <img alt="" className="worksHero-image-arrow" src="/img/works/drawn-arrow.svg"/>
                    <div className="worksHero-div-arrow"></div>

                    <img alt="" className="worksHero-image-data" src="/img/works/data.svg"/>
                    <div className="worksHero-div-data"></div>

                    <img alt="" className="worksHero-image-js" src="/img/works/javascript.svg"/>
                    <div className="worksHero-div-js"></div>

                    <img alt="" className="worksHero-image-android" src="/img/works/android.svg"/>
                    <div className="worksHero-div-android"></div>
                </div>
            </div>
       );
   }
}
 
export default Hero;