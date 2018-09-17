import React, { Component } from 'react';
import './Skills.css';
 
class Skills extends Component{

    renderSkill(){
        if(this.props.side === 'left'){
            return(
                <div className="skills-holder">
                    <div className="skills-left-leftDiv" id={this.props.divId}>
                        <img className={"skills-image-logo "} alt="Logo" src={this.props.img}/>
                    </div>
                    <div className="skills-left-rightDiv">
                        <h3 className="skills-text-large">{this.props.title}</h3>
                        {/* <p className="skills-text-small">{this.props.text}</p> */}
                        <div className="skills-text-small" dangerouslySetInnerHTML={{__html: this.props.text}}></div>
                    </div>
                </div>
            )
        }
        else{
            let classToAdd="";

            if(this.props.divId === 'react'){
                classToAdd="react-img";
            }
            else{
                classToAdd=""
            }

            return(
                <div className="skills-holder">
                    <div className="skills-right-leftDiv">
                        <h3 className={"skills-text-large"}>{this.props.title}</h3>
                        {/* <p className="skills-text-small">{this.props.text}</p> */}
                        <div className="skills-text-small" dangerouslySetInnerHTML={{__html: this.props.text}}></div>
                    </div>
                    <div className="skills-right-rightDiv" id={this.props.divId}>
                        <img className={"skills-image-logo " + classToAdd} alt="Logo" src={this.props.img}/>
                    </div>
                </div>
            )
        }
    }

    render(){
       return(
           <div>
               {this.renderSkill()}
           </div>
       );
   }
}
 
export default Skills;