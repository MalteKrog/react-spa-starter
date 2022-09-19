import { NavLink } from "react-router-dom";
import { useState } from "react";
import img3 from "../assets/linkedin_icon.png";


export default function Nav() {
    const [active, setActive] = useState("nav-menu");
    const [toggleIcon, setToggleIcon] = useState("nav-toggler");

    const navToggle = () => {
        active === "nav-menu" 
        ? setActive("nav-menu nav-active")
        : setActive("nav-menu");

        toggleIcon === "nav-toggler"
        ? setToggleIcon("nav-toggler toggle")
        : setToggleIcon("nav-toggler");
    };

    return (
        <nav className="nav">
            <NavLink to="/" end><img className="nav-logo" src={img3} alt=""></img></NavLink>
            <div className={active}>
                <NavLink to="about" end><span>01.</span>About</NavLink>
                <NavLink to="/" end><span>02.</span>My work</NavLink>
                <NavLink to="/" end><span>03.</span>My CV</NavLink>
                <NavLink to="/" end><span>04.</span>Contact</NavLink>
            </div>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="lineone"></div>
                <div className="linetwo"></div>
                <div className="linethree"></div>
            </div>    
        </nav>
    );

}
