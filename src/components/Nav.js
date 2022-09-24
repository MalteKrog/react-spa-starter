
import { useState } from "react";


export default function Nav() {
    const [active, setActive] = useState("nav-menu");
    const [toggleIcon, setToggleIcon] = useState("nav-toggler");
    const [activeNav, setActiveNav] = useState('#');

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
            <div className={active}>
                <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><span>00.</span>Home</a>
                <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><span>01.</span>About</a>
                <a href="#work" onClick={() => setActiveNav('#work')} className={activeNav === '#work' ? 'active' : ''}><span>02.</span>My work</a>
                <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><span>03.</span>Contact</a>
            </div>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="lineone"></div>
                <div className="linetwo"></div>
                <div className="linethree"></div>
            </div>    
        </nav>  
    );

}
