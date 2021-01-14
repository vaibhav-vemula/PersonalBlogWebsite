import React from "react";
import { NavLink } from "react-router-dom";
import w from "../images/w.png";

const Navbar = () => {
    return(
        <>
        <header className="navb">
        <NavLink exact to="/">
            <img src={w} className="logo" alt="Vaibhav Vemula" />
        </NavLink>
       
            <ul>
                <a exact="true" className="ii" href="https://www.linkedin.com/in/vaibhavvemula/">
                    <i className="fa fa-linkedin fa-lg" aria-hidden="true"/>
                </a>
                <a exact="true" className="ii" href="https://github.com/vaibhav-vemula">
                    <i className="fa fa-github fa-lg" aria-hidden="true"/>
                </a>
                <a exact="true" className="ii" href="https://www.instagram.com/vaibhaaaavvv/">
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

export default Navbar;