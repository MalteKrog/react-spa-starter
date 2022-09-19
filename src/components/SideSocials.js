import img1 from "../assets/Twitter_Social_Icon_Rounded_Square_White.png";
import img2 from "../assets/f_logo_RGB-Grey_58.png";
import img3 from "../assets/linkedin_icon.png";


export default function SideSocials() {
    return (
        <aside>
            <div className="side-socials">
                <ul className="socials-li">
                    <li>
                        <a href="https://twitter.com/maltekrog">
                            <img className="socials-img" src={img1} alt=""></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/maltekrog">
                            <img className="socials-img" src={img3} alt=""></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://facebook.com/maltekrog">
                            <img className="socials-img-f" src={img2} alt=""></img>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="side-mail">
                <div className="mail">
                    <a href="mailto:malte.krog@gmail.com">malte.krog@gmail.com</a>
                    <div className="line"></div>
                </div>
            </div>
        </aside>
    )

}