import React, { Component } from 'react';
import './About.css';
 
class About extends Component{
   render(){
       return(
           <div className="about">
                <h2 className="portfolio-h2">About Me</h2>
                <div className="about-holder-image">
                    <img className="about-image-me" src="/img/about/my_photo_color.png" alt="Me"/>
                </div>

                <div className="about-holder-text">
                    <p className="about-text-small">I'm a Web Developer who loves to have fun and do the thing where I type on a computer all day. <br/><br/> In my spare time, I enjoy watching sports and playing the latest video games.</p>
                </div>

                {/* <div className="about-holder-links">
                    <a href="https://twitter.com/logan44977" target="_blank" rel="noopener noreferrer">
                        <img className="about-image-link" alt="Twitter" src="/img/about/twitter.svg"/>
                    </a>

                    <a href="https://github.com/Logan44977" target="_blank" rel="noopener noreferrer">
                        <img className="about-image-link" alt="Github" src="/img/about/github-logo.svg"/>
                    </a>

                    <a href="mailto:loganclements44977@gmail.com">
                        <img className="about-image-link" alt="Email" src="/img/about/gmail.svg"/>
                    </a>
                </div> */}
           </div>
       );
   }
}
 
export default About;