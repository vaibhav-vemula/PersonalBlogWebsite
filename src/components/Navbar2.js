import React from "react";
import w from "../images/w.png";
import { NavLink } from "react-router-dom";

const Navbar2 = () => {
    return(
        <>
        <header className="navb">
        <NavLink exact to="/">
        <img src={w} className="logo" alt="Vaibhav Vemula" />
        </NavLink>
       <nav>
            <li><NavLink className="navlink" exact to='/'>Back</NavLink></li>
       </nav>
            <ul>
                <a exact="true" className="ii" href="https://www.linkedin.com/in/vaibhavvemula/">
                    <i className="fa fa-linkedin fa-lg" aria-hidden="true"/>
                </a>
                <a  exact="true" className="ii" href="https://github.com/vaibhav-vemula">
                    <i className="fa fa-github fa-lg" aria-hidden="true"/>
                </a>
                <a exact="true"  className="ii" href="https://www.instagram.com/vaibhaaaavvv/">
                    <i className="fa fa-instagram fa-lg" aria-hidden="true"/>
                </a>
                <a exact="true" className="ii" href="https://www.facebook.com/Vaibhav.250701/">
                    <i className="fa fa-facebook fa-lg" aria-hidden="true" />
                </a>
                <a exact="true" className="ii" href="https://twitter.com/vaibhaaaavvv">
                    <i className="fa fa-twitter fa-lg" aria-hidden="true" />
                </a>
            </ul>
       </header>
        </>
    );
};

export default Navbar2;