import React, { Component } from 'react';
import './Contact.css';
 
class Contact extends Component{
   render(){
       return(
            <div className="contact-holder">
                <h2 className="portfolio-h2">Contact Me</h2>
                <p className="contact-text-sm">If you want to contact me you can find me on these platforms or you can download my resume.</p>
                
                <div className="contact-holder-links">
                    <a href="https://twitter.com/logan44977" target="_blank" rel="noopener noreferrer">
                        <img className="contact-image-link" alt="Twitter" src="/img/about/twitter.svg"/>
                    </a>

                    <a href="https://github.com/Logan44977" target="_blank" rel="noopener noreferrer">
                        <img className="contact-image-link" alt="Github" src="/img/about/github-logo.svg"/>
                    </a>

                    <a href="mailto:loganclements44977@gmail.com">
                        <img className="contact-image-link" alt="Email" src="/img/about/gmail.svg"/>
                    </a>
                </div>

                <button className="contact-button-download" onClick={() => alert('This functionality is not yet added -Logan')}>Download resume</button>

            </div>
       );
   }
}
 
export default Contact;