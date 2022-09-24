import React from 'react'
import img1 from "../assets/GitHub-Mark-Light-120px-plus.png"
import img2 from "../assets/linkedin_icon.png"
import img3 from "../assets/f_logo_RGB-Grey_58.png"
import img4 from "../assets/Twitter_Social_Icon_Rounded_Square_White.png"

export default function ContactSidebar() {
    return (
    <div className='contact-section'>
        
        <ul className='contact-info'>
            <li>
            <span class="material-symbols-outlined">
                call
            </span>
            <a href="tel:23709595">(45) 23 70 95 95</a>
            </li>
            <li>
            <span class="material-symbols-outlined">
                mail
            </span>
            <a href="mailto:malte.krog@gmail.com" title="Send me an email">malte.krog@gmail.com</a>
            </li>
        </ul>
        <div className='contact-line'></div>
        <ul className='icon-container'>
            <li className='icon-li'>
            <a href="https://github.com/MalteKrog">
                <img src={img1} alt=""></img>
                <div className='icon-g'></div>
            </a>
            </li>
            <li className='icon-li'>
            <a href="https://www.linkedin.com/in/malte-krog-973b0321a/">
                <img src={img2} alt=""></img>
                <div className='icon-l'></div>
            </a>
            </li>
            <li className='icon-li'>
            <a href="https://facebook.com/maltekrog">
                <img src={img3} alt=""></img>
                <div className='icon-f'></div>
            </a>
            </li>
            <li className='icon-li'>
                <a href="https://twitter.com/maltekrog">
                    <img src={img4} alt=""></img>
                    <div className='icon-t'></div>
                </a>
            </li>
        </ul>
        <div className='contact-line last'></div>
    </div>
    )
}