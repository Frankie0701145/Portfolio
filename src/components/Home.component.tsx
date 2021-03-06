import React, {Component} from "react";
import {NavLink, Redirect} from 'react-router-dom'
import "./Home.component.css";
import "../../node_modules/materialize-social/materialize-social.css";
import Portfolio from './Portfolio.component';
import Skills from './Skills.component';
import {LinkedinFilled, GithubFilled} from '@ant-design/icons';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import profile from "../images/profile.jpg";
import cyborg from '../images/cyborg.jpg';
let M = require("materialize-css");

class Home extends Component {

    render(){
        return (
            <Router>

                <div id="homeWrapper"  className="row">

                    {/* Side Nav */}
                    <div className="col s12 m12 l3" id="sideNav">

                        {/* Profile */}
                        <div className="section center-align">
                            <img src={profile} id="profilePic" alt="Francis"  className="circle responsive-img"></img>
                            <h5 id="name">Francis Njuguna</h5>
                            <blockquote className="left-align hide-on-med-and-down">
                                Hi, my name is Francis Njuguna and I'm a full stack Software Developer. Welcome to my website!
                            </blockquote>
                            <blockquote className="center-align hide-on-large-only">
                                Hi, my name is Francis Njuguna and I'm a full stack Software Developer. Welcome to my website!
                            </blockquote>
                        </div>
                        
                        <div className="section hide-on-med-and-down">
                            <div className="divider"></div>
                            <div className="row">
                                <NavLink to="/portfolio" className="col s12 links"> 
                                    <div className="col s12 navLinks">Portfolio</div>
                                </NavLink>
                            </div>

                            <div className="row">
                                <NavLink to="/skills" className="col s12 links">
                                    <div className="col s12 navLinks">Skills </div>
                                </NavLink>
                            </div>
                        </div>

                        
                        <div className="section" >
                            <div className="divider"></div>
                                <div className="row" >
                                    <div className="col s12 stickyWrapper">
                                            <div className="col s7 m7 l12">
                                                <a href="https://github.com/Frankie0701145"  target="_blank" rel="noopener noreferrer" className="iconsLinks">
                                                    <GithubFilled className="icons"/>
                                                </a>
                                                <a href="#linkedin" className="iconsLinks">
                                                    <LinkedinFilled className="icons"/>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                        </div>

                    </div>


                    {/* Main Nav */}
                    <div className="col s12 m12 l9" id="mainNav">     
                            <Switch>
                                <Route exact path="/">
                                      <Redirect to="/portfolio" />
                                </Route>
                                <Route exact path="/portfolio" component={Portfolio}></Route>
                                <Route exact path="/skills" component={Skills}></Route>
                            </Switch>
                    </div>
                    
                </div>

                {/* slide out side nav */}
                <ul id="slide-out" className="sidenav hide-on-large-only">
                    <li>
                        <div className="user-view">
                            <div className="background-cyborg">
                                <img src={cyborg} height="200px" width="100%" alt="cyborg"/>
                            </div>
                        </div>
                    </li>
                    <li>
                        <NavLink to="/portFolio"><i className="material-icons black-text">folder_shared</i>Portfolio</NavLink>
                    </li>
                    <li>
                        <div className="divider"></div>
                    </li>
                    <li>
                        <NavLink to="/skills"><i className="material-icons black-text">star_border</i>Skills</NavLink>
                    </li>
                    <li>
                        <div className="divider"></div>
                    </li>
                </ul>

                {/* Menu Button */}
                <button data-target="slide-out" className="btn-floating btn-medium waves-effect waves-light black fabBtn hide-on-large-only sidenav-trigger" >
                    <i className="material-icons">menu</i>
                </button>

            </Router>
        )
    }

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            let elems = document.querySelectorAll('.sidenav');
            let options = {};
            M.Sidenav.init(elems, options);
        });
    }
}

export default Home;