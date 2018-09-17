import React, { Component } from 'react';
import './Header.css';
 
class Header extends Component{
   render(){
       return(
           <div className="header">
                <div className="header-left">
                    <p className="header-left-text">Logan</p>
                </div>
                <div className="header-right">
                    <img className="header-right-image" alt="" src="/img/menu/menu.svg" onClick={()=> alert("I haven't added that yet :) - Logan")}/>
                </div>
           </div>
       );
   }
}
 
export default Header;