import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
 
let active = false;

class Header extends Component{


    toggleClass(){
        let menu = document.getElementById('menu');
        let overlay = document.getElementById('overlay');

        if(active){
            menu.classList.remove('is-active');
            active = false;
            overlay.classList = 'overlay menu-slide-up';
        }
        else{
            menu.classList.add('is-active');
            active = true;
            overlay.style.visibility = 'visible';
            overlay.classList = 'overlay menu-slide-down';
        }
    }

    componentDidMount(){
        // sets the overlay to hidden on load
        document.getElementById('overlay').style.visibility = "hidden";
        document.getElementById('overlay').classList = "overlay menu-slide-up";
        active = false;
    }

   render(){
       return(
           <div className="header">
                <div className="header-left">
                    <Link to="/">
                        <p className="header-left-text">Logan</p>                    
                    </Link>
                </div>
                <div className="header-right">
                    <div className="hamburger" id="menu" onClick={() => this.toggleClass()}>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </div>
                </div>

                <div className="overlay menu-slide-up" id="overlay">
                    <div className="menu-holder">
                        <Link to="/">
                            <p className="menu-option">Home</p>
                        </Link>
                        <Link to="/works">
                            <p className="menu-option">Works</p>
                        </Link>
                    </div>
                </div>

           </div>
       );
   }
}
 
export default Header;