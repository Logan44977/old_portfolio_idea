import React, { Component } from 'react';
import './Works.css';
import Header from './components/Header';
import Hero from './works/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
 
class Works extends Component{
   render(){
       return(
           <div>
               <Header/>
               <Hero/>

                <div className="works-holder">
                    <div className="works-holder-lenny">
                        <h2 className="works-text-projectName">Lenny Face Generator</h2>
                        
                        <div className="works-holder-logo">
                            {/* TODO: get a better logo for this please */}
                            <img className="works-image-lennyLogo" alt="Lenny Logo" src="/img/works/projects/lennyface/logo.png"/>
                        </div>
                        
                        <h3 className="works-text-tech">C#, Xamarin, Android Development</h3>
                        <p className="works-text-description">For my Senior project, I decided to build a mobile application with Xamarin. This application has been published on the Google Play Store and has over 5,000 downloads.</p>
                            <button className="works-button-viewWork"> <a className="anchor" href="https://play.google.com/store/apps/details?id=com.application.LennyFace" target="_blank" rel="noopener noreferrer" >View on Google Play</a></button>
                    </div>
                </div>


                <Contact/>
                <Footer/>

           </div>
       );
   }
}
 
export default Works;