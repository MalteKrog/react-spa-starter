import AboutButton from "./AboutButton.js"
import img1 from "../assets/Forside_img.jpg"
import { useInView } from 'react-intersection-observer';
import styles from '../index.css'

export default function HomeIntro() {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
      }); 

    return ( 
        <main ref={ref} className={`${inView ? styles.AboutButton : ""}`}>
            <div className="main-section">
                <h1 className="home-intro">Hi, my name is</h1>
                <h2 className="home-name">Malte Krog</h2>
                <div className="home-one">Welcome</div> 
                    <div className="home-two"> 
                        <span>to my Portfolio</span>
                    </div>
                <p className="home-tekst">I am a <i>frontend developer</i>, who likes to build websites and webapps. Currently, I am focused on starting a company called Next Level Media, where we specialize in making <i>websites, UI/UX</i> and <i>content</i>.
                </p>
                <AboutButton />  
            </div>
            <div className="img-container">
                <img className="home-img" src={img1} alt="Malte Krog"></img>
            </div>
        </main>
    )
};